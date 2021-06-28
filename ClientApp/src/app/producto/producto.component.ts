import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


    url = '';
    producto: any;
    marcas: any;
    modelos: any;
    envios: any;
    EnvioValue: any;
  productosAux: any;
  IdDireccion: any;
  total: any;
    cantidad: any;
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.EnvioValue = 0
    this.cantidad = 1
    console.log(id)
    this.url = apiUrl.url;
    this.http.get(this.url + 'producto/' + id).subscribe(data => {
      console.log(data);
      this.producto = data['data']
    })
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log(data);
      this.productosAux = data['data']
    })
    this.http.get(this.url + 'envio').subscribe(data => {
      console.log(data);
      this.envios = data['data'];
    })
  }
  ngOnInit() {
  }
  filterProductos(value) {
    this.EnvioValue = value
  }
  favoritos(Producto) {
    if (localStorage.getItem('IdUser')) {
      if (localStorage.getItem('IdUser') !== null && localStorage.getItem('IdUser') !== undefined && localStorage.getItem('IdUser') !== '' ) {
        const data = {
          IdFavoritos: 0,
          IdUsuario: +localStorage.getItem('IdUser'),
          ListaDeFavoritos: Producto.idProducto,
          NombreProducto: Producto.nombreDeProducto,
          imageUrl: Producto.idImagen,
          descripcion: Producto.descripcion,
        }
        console.log(data);
        this.http.post(this.url + 'favorito', data).subscribe(response => {
          console.log(response);
        })
      }
      else {
        alert('debe tener sesion iniciada para esta accion')
      }
    }
    else {
      alert('debe tener sesion iniciada para esta accion')
    }
  }

  cambiarCant(value) {
    this.cantidad = +value;
  }
  carrito(Producto) {
    console.log(Producto);
    if (localStorage.getItem('IdUser')) {
      if (localStorage.getItem('IdUser') !== null && localStorage.getItem('IdUser') !== undefined && localStorage.getItem('IdUser') !== '') {
        this.http.get(this.url + 'usuario/' + +localStorage.getItem('IdUser')).subscribe(response => {
          console.log(response);

          if (response['data']['idDireccionFavorita'] = null) {
            this.IdDireccion = 1;
            const data = {
              IdUsuario: +localStorage.getItem('IdUser'),
              IdDireccion: response['data']['idDireccionFavorita'],
              NombreDeCarrito: Producto.nombreDeProducto,
              Descripcion: Producto.descripcion,
              Total: '' + (+Producto.precio) + (+this.EnvioValue),
              Subtotal: '' + Producto.precio,
              TotalEnvio: '' + this.EnvioValue,
              Activo: true,
              Cantidad: this.cantidad,
              imageUrl: Producto.idImagen,
              stock: '' + Producto.stock
            }
            console.log(data);
            this.http.post(this.url + 'carrito', data).subscribe(response => {
              console.log(response);
            })
          } else {
            this.IdDireccion = response['data']['idDireccionFavorita'];
            const data = {
              IdUsuario: +localStorage.getItem('IdUser'),
              IdDireccion: 0,
              NombreDeCarrito: Producto.nombreDeProducto,
              Descripcion: Producto.descripcion,
              Total: '' + (+Producto.precio) + (+this.EnvioValue),
              Subtotal: '' + Producto.precio,
              TotalEnvio: '' + this.EnvioValue,
              Activo: true,
              Cantidad: this.cantidad,
              imageUrl: Producto.idImagen,
              stock: '' + Producto.stock
            }
            console.log(data);
            this.http.post(this.url + 'carrito', data).subscribe(response => {
              console.log(response);
            })
          }
        })
      }
      else {
        alert('debe tener sesion iniciada para esta accion')
      }
    }
    else {
      alert('debe tener sesion iniciada para esta accion')
    }
  }
}
