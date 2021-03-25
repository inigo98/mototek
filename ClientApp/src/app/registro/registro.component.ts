import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  Correo: string;
  Contrasena: string;
  Nombre: string;
  Apellido: string;
  Usuario: string;
  Telefono: string;

  constructor() { }

  ngOnInit() {
  }

}
