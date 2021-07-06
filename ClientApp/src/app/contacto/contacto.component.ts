import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  correo: any;
  values: any;
  constructor(public apiUrl: ApiUrlService, public http: HttpClient) {
    this.http.get(this.apiUrl.url + 'cuenta/correo', { responseType: 'json' }).subscribe(data => {
      console.log(data['data']['descripcion'])
      this.correo = data['data']['descripcion'];
    })
    this.values = {
      email: '',
      nombre: '',
      apellido: '',
      mensaje: '',
      phone: ''
    }
  }

  ngOnInit() {
  }
  change(value, field) {
    this.values[field] = value;
  }
  contacto() {
    console.log(this.values)
    const data = JSON.stringify({
      "serverId": 39353,
      "APIKey": "Xk37Jtc2RGy6x9W5SmYg",
      "Messages": [
        {
          "To": [
            {
              "emailAddress": this.correo
            }
          ],
          "From": {
            "emailAddress": this.values['email']
          },
          "Subject": "Mensaje de " + this.values['nombre'] + "Telefono: " + this.values['phone'],
          "TextBody": this.values['mensaje'],
          "HtmlBody": this.values['mensaje']
        }
      ]
    });

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://rrnnkzsf3eszmw6ya.stoplight-proxy.io/api/v1/email", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
  }
}
