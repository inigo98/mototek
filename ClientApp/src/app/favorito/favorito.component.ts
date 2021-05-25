import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  public productos = [];


  url = '';
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    this.http.get(this.url + 'favorito').subscribe(data => {
      console.log(data);
      this.productos = data['data'];
    })
  }
  ngOnInit() {
  }
  eliminar(id) {
    this.http.delete(this.url + 'favorito/' + id).subscribe(data => {
      console.log(data);
    })
  }
}
