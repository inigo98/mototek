import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    url = '';
    log: any;
    vehiculo: any;
    modelo: any;
    marca: any;
    anos: any;
    envio: any;
    producto: any;
    usuario: any;
    cuenta: any;
    rol: any;

  public progress: number;
  public message: string;

  @Output() public onUploadFinished = new EventEmitter();
  opciones = [
    {
      nombre: 'Nombre de Producto',
      valor: 'NombreDeProducto'
    },
    {
      nombre: 'Descripcion de Producto',
      valor: 'Descripcion'
    },
    {
      nombre: 'Cantidad de Unidades existentes',
      valor: 'Stock'
    },
    {
      nombre: 'Precio',
      valor: 'precio'
    }
  ]

  

  agregarProd = {
    IdProducto: 0,
    ListaIdVehiculo: '',
    ListaIdMarca: '',
    ListaIdModelo: '',
    ListaIdAno: '',
    NombreDeProducto: '',
    Descripcion: '',
    Precio: '',
    NumeroDeVisitas: 0,
    IdImagen: 'https://brakestation.com.mx/wp-content/uploads/2018/10/IMAGEN-NO-DISPONIBLE-300x300.png',
    BloquearProducto: false,
    IdVehiculoText: '',
    IdMarcaText: '',
    IdModeloText: '',
    IdAnoText: '',
    Stock: '',
    NumeroDeComprados: 0,
  }
  opcionesHistory = [
    {
      nombre: 'Pagado',
      valor: 'Pagado'
    },
    {
      nombre: 'Rechazado',
      valor: 'Rechazado'
    },
    {
      nombre: 'Enviado',
      valor: 'Enviado'
    }
  ]

  agregarUser = {
    IdUsuario: 0,
    IdRol: 16,
    Nombre: 'admin',
    Apellido: 'admin',
    Usuario1: 'admin',
    Correo: '',
    Contrasena: '',
    Telefono: '333811-5213',
    IdDireccion: '' + 0,
    IdDireccionFavorita: '' + 0,
    Bloquear: false,
    RecibirNotificaciones: false
  }

  addEnvios = {
    IdEnvio: 0,
    Precio: '',
    IdEstado: 0,
    TiempoDeEntrega: '',
    Estado: '',
  }

  addAnos = {
    IdAno: 0,
    NombreDeAno: '',
  }

  addMarca = {
    IdMarca: 0,
    NombreDeMarca: '',
    Descripcion: '',
  }

  addModelo = {
    IdModelo: 0,
    NombreDeModelo: '',
    Descripcion: '',
  }

  addVehiculo = {
    IdVehiculo: 0,
    NombreDeVehiculo: '',
    Descripcion: '',
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['visitas', 'stock', 'comprados', 'precio'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors;
    customerBarChartData: boolean;
    transferencia: any;
    valorProdActualizar: any;
    fieldUpdate: any;
    AuxProd: any;
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    this.customerBarChartData = false;
    this.http.get(this.url + 'rol').subscribe(data => {
      console.log(data);
      this.rol = data['data'];
    })
    this.http.get(this.url + 'usuario').subscribe(data => {
      console.log(data);
      this.usuario = data['data'];
    })
    this.http.get(this.url + 'cuenta').subscribe(data => {
      console.log(data);
      this.cuenta = data['data'];
    })
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log(data);
      this.producto = data['data'];
      this.cargarDatos(this.producto);
    })
    this.http.get(this.url + 'envio').subscribe(data => {
      console.log(data);
      this.envio = data['data'];
    })
    this.http.get(this.url + 'anos').subscribe(data => {
      console.log(data);
      this.anos = data['data'];
    })
    this.http.get(this.url + 'marca').subscribe(data => {
      console.log(data);
      this.marca = data['data'];
    })
    this.http.get(this.url + 'modelo').subscribe(data => {
      console.log(data);
      this.modelo = data['data'];
    })
    this.http.get(this.url + 'historial').subscribe(data => {
      console.log(data);
      this.transferencia = data['data'];
    })
    this.http.get(this.url + 'vehiculo').subscribe(data => {
      console.log(data);
      this.vehiculo = data['data'];
    })
    this.http.get(this.url + 'log').subscribe(data => {
      console.log(data);
      this.log = data['data'];
    })
  }
  changeAddProdVehi(value) {
    console.log(value);
    this.agregarProd['IdVehiculoText'] = value
  }
  changeAddProdMod(value) {
    console.log(value);
    this.agregarProd['IdModeloText'] = value
  }
  changeAddMarca(value) {
    console.log(value);
    this.agregarProd['IdMarcaText'] = value
  }
  changeAddProdAnos(value) {
    console.log(value);
    this.agregarProd['IdAnoText'] = value
  }
  addProdValue(value, field) {
    console.log(value)
    this.agregarProd[field] = value
    console.log(this.agregarProd)
  }
  addProdValueInt(value, field) {
    console.log(value)
    this.agregarProd[field] = +value
    console.log(this.agregarProd)
  }

  addEnviosValue(value, field) {
    console.log(value)
    this.addEnvios[field] = value
    console.log(this.addEnvios)
  }

  addAnosValue(value, field) {
    console.log(value)
    this.addAnos[field] = value
    console.log(this.addAnos)
  }

  addMarcaValue(value, field) {
    console.log(value)
    this.addMarca[field] = value
    console.log(this.addMarca)
  }

  addModeloValue(value, field) {
    console.log(value)
    this.addModelo[field] = value
    console.log(this.addModelo)
  }

  addVehiculoValue(value, field) {
    console.log(value)
    this.addVehiculo[field] = value
    console.log(this.addVehiculo)
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

          this.agregarProd['IdImagen'] = 'https://tienda-mototec.com/ClientApp/dist/' + event['body']['fullFileName']

        }
      });
  }

  argregarProducto() {
    console.log(this.agregarProd)
    this.http.post(this.url + 'producto', this.agregarProd).subscribe(data => {
      console.log(data);
    })
  }

  
  addUserValue(value, field) {
    console.log(value)
    this.agregarUser[field] = value
    console.log(this.agregarUser)
  }
  AddUser() {
    console.log(this.agregarUser)
    this.http.post(this.url + 'usuario', this.agregarUser).subscribe(data => {
      console.log(data);
    })
  }

  agregarEnvios() {
    console.log(this.addEnvios)
    this.http.post(this.url + 'envio', this.addEnvios).subscribe(data => {
      console.log(data);
    })
  }

  agregarAnos() {
    console.log(this.addAnos)
    this.http.post(this.url + 'anos', this.addAnos).subscribe(data => {
      console.log(data);
    })
  }

  agregarMarca() {
    console.log(this.addMarca)
    this.http.post(this.url + 'marca', this.addMarca).subscribe(data => {
      console.log(data);
    })
  }

  agregarModelo() {
    console.log(this.addModelo)
    this.http.post(this.url + 'modelo', this.addModelo).subscribe(data => {
      console.log(data);
    })
  }

  agregarVehiculo() {
    console.log(this.addVehiculo)
    this.http.post(this.url + 'vehiculo', this.addVehiculo).subscribe(data => {
      console.log(data);
    })
  }

  cargarDatos(datos) {
    this.barChartData = [];

    for (const aux of datos) {
      console.log(aux)
      console.log(+aux['precio'])
      console.log(aux['precio'])
      this.barChartData.push({ data: [+aux['stock'], +aux['numeroDeVisitas'], +aux['numeroDeComprados'], +aux['precio']], label: aux['nombreDeProducto'] });
    }
    this.customerBarChartData = true;

  }
  eliminarrol(id) {
    console.log(id)
    this.http.delete(this.url + 'rol/' + id).subscribe(data => {
      console.log(data);
    })
  }
  bloquearusuario(id) {
    const data = {
      "campo": "[bloquear]",
      "valor": "1",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  desbloquearusuario(id) {
    const data = {
      "campo": "[bloquear]",
      "valor": "0",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarusuario(id) {
    console.log(id)
    this.http.delete(this.url + 'usuario/' + id).subscribe(data => {
      console.log(data);
    })
  }
  cambiarCuenta(value, id) {
    if ( (typeof value) === "string") {
      value = "'" + value + "'"
    } 
    const data = {
      "campo": "[descripcion]",
      "valor": value,
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'cuenta/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarcuenta(id) {
    console.log(id)
    this.http.delete(this.url + 'cuenta/' + id).subscribe(data => {
      console.log(data);
    })
  }
  bloquearprod(id) {
    const data = {
      "campo": "[BloquearProducto]",
      "valor": "1",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'producto/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  desbloquearprod(id) {
    const data = {
      "campo": "[BloquearProducto]",
      "valor": "0",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'producto/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  cambiarValorProd(value) {
    this.valorProdActualizar = value;
  }
  chooseUpdateField(value) {
    this.fieldUpdate = value;
  }
  idProd(Producto) {
    this.AuxProd = Producto
  }
  actualizarProd() {
    const data = {
      "campo": "[" + this.fieldUpdate + "]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'producto/' + this.AuxProd['idProducto'], data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarproducto(id) {
    console.log(id)
    this.http.delete(this.url + 'producto/' + id).subscribe(data => {
      console.log(data);
    })
  }

  cambiarenvio(value, id) {
    const data = {
      "campo": "[precio]",
      "valor":  value,
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'envio/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarenvio(id) {
    console.log(id)
    this.http.delete(this.url + 'envio/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminaranos(id) {
    console.log(id)
    this.http.delete(this.url + 'anos/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarmarca(id) {
    console.log(id)
    this.http.delete(this.url + 'marca/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarmodelo(id) {
    console.log(id)
    this.http.delete(this.url + 'modelo/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarvehiculo(id) {
    console.log(id)
    this.http.delete(this.url + 'vehiculo/' + id).subscribe(data => {
      console.log(data);
    })
  }

  changeValHistory(value, id) {
    const data = {
      "campo": "[status]",
      "valor": "'" + value + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'historial/' + id, data).subscribe(data => {
      console.log(data);
      this.http.get(this.url + 'checkUser/' + id).subscribe(data => {
        console.log(data);
        const message = 'El estatus de su pedido ha sido actualizado a: ' + data['data']['status']
        this.contacto(data['data']['email'], "postmaster@tienda-mototec.com", message)
      })
    })
  }
  ngOnInit(): void {
    document.getElementById("defaultOpen").click();
  }

  openCity(evt, cityName) {
    console.log(evt);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  contacto(correoTo, correoFrom, message) {
    const data = JSON.stringify({
      "serverId": 39353,
      "APIKey": "Xk37Jtc2RGy6x9W5SmYg",
      "Messages": [
        {
          "To": [
            {
              "emailAddress": correoTo
            }
          ],
          "From": {
            "emailAddress": correoFrom
          },
          "Subject": "Actualizacion de  Estatus de su Pedido" ,
          "TextBody": message,
          "HtmlBody": ""
        }
      ]
    });

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://rrnnkzsf3eszmw6ya.stoplight-proxy.io/api/v1/email", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
  }
}
