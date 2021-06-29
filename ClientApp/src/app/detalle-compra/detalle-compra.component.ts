import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  transferencia: any;

  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {

    this.http.get(this.url + 'historial').subscribe(data => {
      console.log(data);
      this.transferencia = data['data'];
    })

  }

  ngOnInit() {
  }

}
