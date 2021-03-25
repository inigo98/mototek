import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos = [];
  public variables = ['nombre', 'precio', 'marca', 'modelo', 'descripcion'];


  constructor() { }

  ngOnInit() {
  }

}
