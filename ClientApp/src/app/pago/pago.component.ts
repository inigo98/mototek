import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlService } from '../api-url.service';
declare var paypal;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  totalCarrito: number;
    envioTotal: number;
    subtotal: number;
    productos: any;
    url: any;
    usuario: any;
  transferencia: any;
  public progress: number;
  public message: string;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;
  @Output() public onUploadFinished = new EventEmitter();
    comprobacion: string;
    idHistorial: any;

  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    this.idHistorial = 0;
    this.comprobacion = '';
    if (localStorage.getItem('IdUser')) {
      if (localStorage.getItem('IdUser') !== null && localStorage.getItem('IdUser') !== undefined && localStorage.getItem('IdUser') !== '') {
        this.http.get(this.url + 'usuario/' + localStorage.getItem('IdUser')).subscribe(data => {
          console.log(data);
          if (data['data'] == null) {
            var r = confirm("su usuario no existe");
            if (r == true) {
              this.router.navigate(['/login']);
            } else {
              this.router.navigate(['/login']);
            }
          } else {
            if (data['data']['bloquear'] == true) {
              var r = confirm("su usuario esta bloqueado");
              if (r == true) {
                this.router.navigate(['/login']);
              } else {
                this.router.navigate(['/login']);
              }
            } else {
              //entra a la pagina
              this.http.get(this.url + 'carrito/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.productos = data['data'];
              })
              this.http.get(this.url + 'usuario/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.usuario = data['data'];
              })
              this.http.get(this.url + 'cuenta/transferencia').subscribe(data => {
                console.log(data);
                this.transferencia = data['data']['descripcion'];
              })
            }
          }
        })
      }
    }
    this.calcular();
  }

  calcular() {
    this.totalCarrito = 0;
    this.subtotal = 0;
    this.envioTotal = 0;
    this.http.get(this.url + 'carrito/' + localStorage.getItem('IdUser')).subscribe(data => {
      console.log(data);
      this.productos = data['data'];
      for (let producto of this.productos) {
        if (producto['activo']) {
          this.envioTotal = this.envioTotal + (+producto['totalEnvio'])
          this.subtotal = this.subtotal + ((+producto['subtotal']) * producto['cantidad'])
          this.totalCarrito = this.totalCarrito + ((+producto['subtotal']) * producto['cantidad']) + (+producto['totalEnvio'])
        }
      }
    })
  }
  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'MXN',
                  value: this.totalCarrito
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
          if (order['status'] == 'COMPLETED') {
            this.comprado(order);
          }
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post(this.url + 'upload', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          this.comprobacion = 'https://tienda-mototec.com/ClientApp/dist/' + event['body']['fullFileName']
          console.log(this.comprobacion)
        }
      });
  }
  guardarHistorial() {
    if (this.comprobacion == '') {
      alert('no ha subido imagen')
    }
    const data = {
      IdHistorial: 0,
      IdCarrito: 0,
      IdUsuario: +localStorage.getItem('IdUser'),
      ListaDeProducto: 0,
      FechaDeCreacion: null,
      FechaDeModificacion: null,
      ImageUrl: this.comprobacion,
      NombreProducto: 'pedido',
      status: 'validando pago',
      direccion: this.usuario['idDireccionFavorita'],
      email: this.usuario['correo'],
      clabe: 'transferencia',
      activo: true,
      comprobacion: this.comprobacion,
    }
    this.http.post(this.url + 'historial', data).subscribe(data => {
      console.log(data);
      this.http.get(this.url + 'historial').subscribe(data => {
        console.log(data)
        let leng = data['data'].length;
        this.idHistorial = data['data'][leng-1]['idHistorial'];
        console.log(this.idHistorial)
        for (let prod of this.productos) {
          if (prod['activo']) {
            let data = {
              "campo": "[NombreDeCarrito]",
              "valor": "'" + this.idHistorial + "'",
              "usuario": localStorage.getItem('IdUser')
            }
            this.http.put(this.url + 'carrito/' + prod['idCarrito'], data).subscribe(data => {
              console.log(data);
            })
            let data1 = {
              "campo": "[Activo]",
              "valor": "'false'",
              "usuario": localStorage.getItem('IdUser')
            }
            this.http.put(this.url + 'carrito/' + prod['idCarrito'], data1).subscribe(data => {
              console.log(data);
            })
          }
        }
      })
    })
  }
  historialId() {
    if (this.idHistorial == 0) {
      alert('aun no ha pagado')
      return;
    } else {
      this.router.navigate(['/despues-compra', this.idHistorial]);
    }
  }
  comprado(order) {
    const data = {
      IdHistorial: 0,
      IdCarrito: 0,
      IdUsuario: +localStorage.getItem('IdUser'),
      ListaDeProducto: 0,
      FechaDeCreacion: null,
      FechaDeModificacion: null,
      ImageUrl: this.comprobacion,
      NombreProducto: 'pedido',
      status: 'pagado',
      direccion: this.usuario['idDireccionFavorita'],
      email: this.usuario['correo'],
      clabe: 'paypal - ' + order['id'],
      activo: true,
      comprobacion: this.comprobacion,
    }
    this.http.post(this.url + 'historial', data).subscribe(data => {
      console.log(data);
      this.http.get(this.url + 'historial').subscribe(data => {
        console.log(data)
        let leng = data['data'].length;
        this.idHistorial = data['data'][leng - 1]['idHistorial'];
        console.log(this.idHistorial)
        for (let prod of this.productos) {
          if (prod['activo']) {
            let data = {
              "campo": "[NombreDeCarrito]",
              "valor": "'" + this.idHistorial + "'",
              "usuario": localStorage.getItem('IdUser')
            }
            this.http.put(this.url + 'carrito/' + prod['idCarrito'], data).subscribe(data => {
              console.log(data);
            })
            let data1 = {
              "campo": "[Activo]",
              "valor": "'false'",
              "usuario": localStorage.getItem('IdUser')
            }
            this.http.put(this.url + 'carrito/' + prod['idCarrito'], data1).subscribe(data => {
              console.log(data);
            })
          }
        }
      })
    })
  }
}
