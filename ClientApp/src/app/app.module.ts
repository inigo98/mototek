import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';
import { HistorialComponent } from './historial/historial.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PagoComponent } from './pago/pago.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { DetalleCompraComponent } from './detalle-compra/detalle-compra.component';
import { DespuesCompraComponent } from './despues-compra/despues-compra.component';
import { AdminConfiguracionesComponent } from './admin-configuraciones/admin-configuraciones.component';
import { AdminReportesComponent } from './admin-reportes/admin-reportes.component';
import { AdminAgregarProductosComponent } from './admin-agregar-productos/admin-agregar-productos.component';
import { AdminAgregarCategoriasComponent } from './admin-agregar-categorias/admin-agregar-categorias.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    ProductoComponent,
    HistorialComponent,
    FavoritoComponent,
    CarritoComponent,
    ProductosComponent,
    CategoriasComponent,
    PagoComponent,
    ConfiguracionesComponent,
    PrivacidadComponent,
    TerminosComponent,
    DetalleProductoComponent,
    DetalleCompraComponent,
    DespuesCompraComponent,
    AdminConfiguracionesComponent,
    AdminReportesComponent,
    AdminAgregarProductosComponent,
    AdminAgregarCategoriasComponent,
    AdminUsuariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'privacidad', component: PrivacidadComponent },
      { path: 'producto', component: ProductoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
