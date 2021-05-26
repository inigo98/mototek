import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../api-url.service';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    url = '';
    log: any;
    vehiculo: any;
    modelo: any;
    marca: any;
    anos: any;
    envio: any;
    producto: any;
    usuario: any;
    cuenta: any;
  rol: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['visitas', 'stock', 'comprados', 'precio'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors;
    customerBarChartData: boolean;
  constructor(public http: HttpClient, public apiUrl: ApiUrlService, private router: Router) {
    this.url = apiUrl.url;
    this.customerBarChartData = false;
    this.http.get(this.url + 'rol').subscribe(data => {
      console.log(data);
      this.rol = data['data'];
    })
    this.http.get(this.url + 'usuario').subscribe(data => {
      console.log(data);
      this.usuario = data['data'];
    })
    this.http.get(this.url + 'cuenta').subscribe(data => {
      console.log(data);
      this.cuenta = data['data'];
    })
    this.http.get(this.url + 'producto').subscribe(data => {
      console.log(data);
      this.producto = data['data'];
      this.cargarDatos(this.producto);
    })
    this.http.get(this.url + 'envio').subscribe(data => {
      console.log(data);
      this.envio = data['data'];
    })
    this.http.get(this.url + 'anos').subscribe(data => {
      console.log(data);
      this.anos = data['data'];
    })
    this.http.get(this.url + 'marca').subscribe(data => {
      console.log(data);
      this.marca = data['data'];
    })
    this.http.get(this.url + 'modelo').subscribe(data => {
      console.log(data);
      this.modelo = data['data'];
    })
    this.http.get(this.url + 'vehiculo').subscribe(data => {
      console.log(data);
      this.vehiculo = data['data'];
    })
    this.http.get(this.url + 'log').subscribe(data => {
      console.log(data);
      this.log = data['data'];
    })
  }
  cargarDatos(datos) {
    this.barChartData = [];

    for (const aux of datos) {
      console.log(aux)
      console.log(+aux['precio'])
      console.log(aux['precio'])
      this.barChartData.push({ data: [+aux['stock'], +aux['numeroDeVisitas'], +aux['numeroDeComprados'], +aux['precio']], label: aux['nombreDeProducto'] });
    }
    this.customerBarChartData = true;

  }
  eliminarrol(id) {
    console.log(id)
    this.http.delete(this.url + 'rol/' + id).subscribe(data => {
      console.log(data);
    })
  }
  bloquearusuario(id) {
    const data = {
      "campo": "[bloquear]",
      "valor": "1",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  desbloquearusuario(id) {
    const data = {
      "campo": "[bloquear]",
      "valor": "0",
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'usuario/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarusuario(id) {
    console.log(id)
    this.http.delete(this.url + 'usuario/' + id).subscribe(data => {
      console.log(data);
    })
  }
  cambiarCuenta(value, id) {
    const data = {
      "campo": "[descripcion]",
      "valor": '"' + value + '"',
      "usuario": localStorage.getItem('IdUser')
    }
    console.log(data)
    this.http.put(this.url + 'cuenta/' + id, data).subscribe(data => {
      console.log(data);
    })
  }
  eliminarcuenta(id) {
    console.log(id)
    this.http.delete(this.url + 'cuenta/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarproducto(id) {
    console.log(id)
    this.http.delete(this.url + 'producto/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarenvio(id) {
    console.log(id)
    this.http.delete(this.url + 'envio/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminaranos(id) {
    console.log(id)
    this.http.delete(this.url + 'anos/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarmarca(id) {
    console.log(id)
    this.http.delete(this.url + 'marca/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarmodelo(id) {
    console.log(id)
    this.http.delete(this.url + 'modelo/' + id).subscribe(data => {
      console.log(data);
    })
  }
  eliminarvehiculo(id) {
    console.log(id)
    this.http.delete(this.url + 'vehiculo/' + id).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    document.getElementById("defaultOpen").click();
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
