import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos = [];
  public vehiculos = [];
  public marcas = [];
  public modelos = [];
  public anos = [];
  public variables = ['nombre', 'precio', 'marca', 'modelo', 'descripcion'];


  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log('prod')
      console.log(data);
      this.productos = data['data'];
    })
    this.http.get(this.url + 'vehiculo').subscribe(data => {
      console.log('ve')
      console.log(data);
      this.vehiculos = data['data'];
    })
    this.http.get(this.url + 'marca').subscribe(data => {
      console.log('marca')
      console.log(data);
      this.marcas = data['data'];
    })
    this.http.get(this.url + 'modelo').subscribe(data => {
      console.log('modelo')
      console.log(data);
      this.modelos = data['data'];
    })
    this.http.get(this.url + 'anos').subscribe(data => {
      console.log('ano')
      console.log(data);
      this.anos = data['data'];
    })
  }
  filterProductos(value, field) {
    console.log(value, field)
    var auxProductos = []
    for (let producto of this.productos) {
      if (producto[field] == value) {
        auxProductos.push(producto)
      }
    }
    this.productos = auxProductos
  }
  ngOnInit() {
  }
  limpiarfiltros() {
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log('prod')
      console.log(data);
      this.productos = data['data'];
    })
  }
}
