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
            }
          }
        })
      }
    }
  }

  ngOnInit() {
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
      if (data['data'] == 1) {
        alert('se guardaron los cambios')
      }
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
      if (data['data'] == 1) {
        alert('se guardaron los cambios')
      }
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
      if (data['data'] == 1) {
        alert('se guardaron los cambios')
      }
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


}
