import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlService } from '../api-url.service';

@Component({
  selector: 'app-despues-compra',
  templateUrl: './despues-compra.component.html',
  styleUrls: ['./despues-compra.component.css']
})
export class DespuesCompraComponent implements OnInit {
  totalCarrito: number;
  envioTotal: number;
  subtotal: number;
  productos: any;
  url: any;
  usuario: any;
    idHistorial: string;
    carrito: any;

  constructor(public http: HttpClient, private route: ActivatedRoute, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    let id = this.route.snapshot.paramMap.get('id');
    this.idHistorial = id;
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
              this.http.get(this.url + 'checkUser/' + id).subscribe(data => {
                console.log(data);
                this.productos = data['data'];
              })
              this.http.get(this.url + 'usuario/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.usuario = data['data'];
              })
              this.http.get(this.url + 'carrito/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.carrito = data['data'];
              })
            }
          }
        })
      }
    }
  }

  ngOnInit() {
  }
  recibido() {

    let data1 = {
      "campo": "[status]",
      "valor": "'recibido'",
      "usuario": localStorage.getItem('IdUser')
    }
    this.http.put(this.url + 'historial/' + this.idHistorial, data1).subscribe(data => {
      console.log(data);
    })
  }
}
