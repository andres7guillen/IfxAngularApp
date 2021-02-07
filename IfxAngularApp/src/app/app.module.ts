import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoCrearComponent } from './components/empleado-crear/empleado-crear.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { EmpleadoEditarComponent } from './components/empleado-editar/empleado-editar.component';
import { EmpleadoListarComponent } from './components/empleado-listar/empleado-listar.component';
import { EntidadCrearComponent } from './components/entidad-crear/entidad-crear.component';
import { EntidadDetalleComponent } from './components/entidad-detalle/entidad-detalle.component';
import { EntidadEditarComponent } from './components/entidad-editar/entidad-editar.component';
import { EntidadListarComponent } from './components/entidad-listar/entidad-listar.component';
import { NavComponent } from './components/nav/nav.component';
import { RolUsuarioComponent } from './components/rol-usuario/rol-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ConexionesService } from './services/conexiones.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoCrearComponent,
    EmpleadoDetalleComponent,
    EmpleadoEditarComponent,
    EmpleadoListarComponent,
    EntidadCrearComponent,
    EntidadDetalleComponent,
    EntidadEditarComponent,
    EntidadListarComponent,
    NavComponent,
    RolUsuarioComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConexionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
