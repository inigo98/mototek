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
              this.http.get(this.url + 'favorito/' + localStorage.getItem('IdUser')).subscribe(data => {
                console.log(data);
                this.productos = data['data'];
              })
            }
          }
        })
      }
    }
  }
  ngOnInit() {
  }
  eliminar(id) {
    this.http.delete(this.url + 'favorito/' + id).subscribe(data => {
      console.log(data);
      this.http.get(this.url + 'favorito/' + localStorage.getItem('IdUser')).subscribe(data => {
        console.log(data);
        this.productos = data['data'];
      })
    })
  }
}
