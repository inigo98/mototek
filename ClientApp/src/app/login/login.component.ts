import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginValues = {
    email: '',
    pass: ''
  }
  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
  }

  ngOnInit() {
  }
  login() {
    console.log(this.loginValues);
    const objectValues = {
      "key1": this.loginValues['email'],
      "key2": this.loginValues['pass'],
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
    this.http.post(this.url + 'usuario/0', objectValues, {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          }
        )
    }).subscribe(data => {
      console.log(data);
      if (data['data'] !== null) {
        if (!data['data']['bloquear']) {
          localStorage.setItem('IdUser', data['data']['idUsuario']);
          if (data['data']['idRol'] == 16 || data['data']['idRol'] == 17) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/configuracion']);
          }
        } else {
          alert('su usuario ha sido bloqueado')
        }
      } else {
        alert('datos incorrectos')
      }
    })

  }
  valueUpdate(value, field) {
    this.loginValues[field] = value;
  }
}
