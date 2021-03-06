import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public productos = [];
  public totalCarrito = 0;

  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
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
            }
          }
        })
      }
    }
    this.calcular();
  }
  eliminar(id) {
    this.http.delete(this.url + 'carrito/' + id).subscribe(data => {
      console.log(data);
      this.calcular();
    })
  }
  calcular() {
    this.totalCarrito = 0;
    this.http.get(this.url + 'carrito/' + localStorage.getItem('IdUser')).subscribe(data => {
      console.log(data);
      this.productos = data['data'];
      for (let producto of this.productos) {
        if (producto['activo']) {
          this.totalCarrito = this.totalCarrito + ((+producto['subtotal']) * producto['cantidad']) + (+producto['totalEnvio'])
        }
      }
    })
  }
  comprar() {
    localStorage.setItem('total', '' + this.totalCarrito);
    this.router.navigate(['/detalle-compra'])
  }
  cambio(value, producto) {
    const data = {
      "campo": "[cantidad]",
      "valor": value,
      "usuario": localStorage.getItem('IdUser')
    }
    this.http.put(this.url + 'carrito/' + producto.idCarrito, data).subscribe(data => {
      console.log(data);
      this.calcular();
    })
  }
  ngOnInit() {
  }
}
