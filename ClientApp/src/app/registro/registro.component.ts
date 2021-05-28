import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

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
  registioValues = {
    email: '',
    pass: '',
    nombre: '',
    apellido: '',
    usuario: '',
    phone: ''
  }
  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
  }

  ngOnInit() {
  }
  checkMail() {
    console.log(this.registioValues);
    const objectValues = {
      "key1": this.registioValues['email'],
      "key2": "",
      "key3": "",
      "key4": "",
      "key5": "",
      "key6": "",
      "key7": "",
      "key8": "",
      "key9": "",
      "key10": ""
    }
    console.log(objectValues);
    this.http.post(this.url + 'checkuser', objectValues).subscribe(data => {
      console.log(data);
      if (data['data'] !== null) {
        console.log('this user already exist')
        alert('este usuario ya existe')
      } else {
        this.registrarse()
      }
    })
  }
  registrarse() {
    console.log(this.registioValues);
    const objectValues = {
      "IdUsuario": 0,
      "IdRol": 14,
      "Nombre": this.registioValues['nombre'],
      "Apellido": this.registioValues['apellido'],
      "Usuario1": this.registioValues['usuario'],
      "Correo": this.registioValues['email'],
      "Contrasena": this.registioValues['pass'],
      "Telefono": this.registioValues['phone'],
      "IdDireccion": 0,
      "IdDireccionFavorita": 0,
      "Bloquear": false,
      "RecibirNotificaciones": false,
      "FechaDeCreacion": null,
      "FechaDeModificacion": null
    }
    console.log(objectValues);
    this.http.post(this.url + 'usuario', objectValues).subscribe(data => {
      console.log(data);
      if (data['status'] === "Ok") {
        localStorage.setItem('IdUser', data['data']['idUsuario']);
        this.router.navigate(['/login']);
      }
    })
  }
  valueUpdate(value, field) {
    this.registioValues[field] = value;
  }

}
