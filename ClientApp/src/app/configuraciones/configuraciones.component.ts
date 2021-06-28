import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {
  Usuario: string;
  Domicilio: string;
  registioValues = {
    email: '',
    pass: '',
    usuario: '',
    domicilio: ''
  }
  url = '';
  fieldUpdate = 'correo';
  valorProdActualizar = '';
  AuxProd = '';

  cambiarCorreo = {
    correo: '',
    contrasena: '',
  }

  cambiarUsuario = {
    usuario1: '',
  }

  cambiarContrasena = {
    contrasena: '',
  }

  cambiarDomicilio = {
    Ubicacion: '',
  }

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
        alert('este correo ya existe')
      } else {
        this.cambiar()
      }
    })
  }

  cambiar() {
    console.log(this.registioValues);
    const objectValues = {

      "Correo": this.registioValues['email'],
      "IdDireccion": '' + 0,
      "IdDireccionFavorita": '' + 0,
      "Bloquear": false,
      "RecibirNotificaciones": false,
      "FechaDeCreacion": null,
      "FechaDeModificacion": null
    }
    console.log(objectValues);
    this.http.post(this.url + 'usuario/', objectValues).subscribe(data => {
      console.log(data);
      if (data['status'] === "Ok") {
        localStorage.setItem('IdUser', data['data']['idUsuario']);
        this.router.navigate(['/configuracion']);
      }
    })
  }

  chooseUpdateField(value) {
    this.fieldUpdate = value;
  }

  cambiarValorEmail(value) {
    this.valorProdActualizar = value;
  }

  cambiarValorUser(value) {
    this.valorProdActualizar = value;
  }

  cambiarValorPass(value) {
    this.valorProdActualizar = value;
  }

  cambiarValorDom(value) {
    this.valorProdActualizar = value;
  }

  cambiarEmail() {
    const data = {
      "campo": "[correo]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + localStorage.getItem('IdUser'), data).subscribe(data => {
      console.log(data);
    })
  }

  cambiarUser() {
    const data = {
      "campo": "[usuario1]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + localStorage.getItem('IdUser'), data).subscribe(data => {
      console.log(data);
    })
  }

  cambiarPass() {
    const data = {
      "campo": "[contrasena]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + localStorage.getItem('IdUser'), data).subscribe(data => {
      console.log(data);
    })
  }

  cambiarDom() {
    const data = {
      "campo": "[idDireccion]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + localStorage.getItem('IdUser'), data).subscribe(data => {
      console.log(data);
    })
    const data1 = {
      "campo": "[idDireccionFavorita]",
      "valor": "'" + this.valorProdActualizar + "'",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data1)
    this.http.put(this.url + 'usuario/' + localStorage.getItem('IdUser'), data1).subscribe(data => {
      console.log(data);
    })
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

}
