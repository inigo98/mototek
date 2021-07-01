import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  transferencia: any;

  url = '';
    productos: any;
    totalCarrito: any;
    usuario: any;
    envioTotal: number;
    subtotal: number;
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
              this.http.get(this.url + 'usuario/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.usuario = data['data'];
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
  }
}
