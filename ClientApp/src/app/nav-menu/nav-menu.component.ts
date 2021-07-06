import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  normal: Boolean;
  sesioniniciada: Boolean;
  public islogged: Boolean = false;

  public productos = [];
    buscadorproductos: any[];

  getCurrentUser() {
    let user_string = localStorage.getItem("idUsuario");
    if ( (user_string)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    if (localStorage.getItem('IdUser')) {
      if (localStorage.getItem('IdUser') !== null && localStorage.getItem('IdUser') !== undefined && localStorage.getItem('IdUser') !== '') {
        this.sesioniniciada = true;
      } else {
        this.sesioniniciada = true;
      }
    }

    this.url = apiUrl.url;
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log('prod')
      console.log(data);
      this.productos = data['data'];
    })

  }

  buscarPalabra(value) {
    console.log(value)
    value=value.toLowerCase()
    this.http.get(this.url + 'producto').subscribe(data => {
      this.productos = data['data'];
    })
    var auxProductos = []
    for (let producto of this.productos) {
      console.log(producto['nombreDeProducto'].toLowerCase().includes(value));
      if (producto['nombreDeProducto'].toLowerCase().includes(value)) {
        auxProductos.push(producto)
        console.log(auxProductos);
      }
      
    }
    this.buscadorproductos = auxProductos
  }

  logout() {
    localStorage.removeItem('IdUser');
    this.router.navigate(['/login']);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
