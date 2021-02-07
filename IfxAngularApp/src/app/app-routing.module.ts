import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { EmpleadoEditarComponent } from './components/empleado-editar/empleado-editar.component';
import { EmpleadoCrearComponent } from './components/empleado-crear/empleado-crear.component';
import { EntidadListarComponent } from './components/entidad-listar/entidad-listar.component';
import { EntidadCrearComponent } from './components/entidad-crear/entidad-crear.component';
import { EntidadDetalleComponent } from './components/entidad-detalle/entidad-detalle.component';
import { EntidadEditarComponent } from './components/entidad-editar/entidad-editar.component';
import { EmpleadoListarComponent } from './components/empleado-listar/empleado-listar.component';
import { RolUsuarioComponent } from './components/rol-usuario/rol-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const ROUTES: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'empleadoDetalle/:id', component:EmpleadoDetalleComponent, canActivate:[ AuthGuard ] },
  { path: 'empleadoEditar/:id', component:EmpleadoEditarComponent, canActivate:[ AuthGuard ] },
  { path: 'empleadoCrear', component:EmpleadoCrearComponent, canActivate:[ AuthGuard ] },
  { path: 'entidadListar', component: EntidadListarComponent,canActivate:[ AuthGuard ] },
  { path: 'entidadCrear', component: EntidadCrearComponent,canActivate:[ AuthGuard ] },
  { path: 'entidadDetalle/:id', component: EntidadDetalleComponent,canActivate:[ AuthGuard ] },
  { path: 'entidadEditar/:id', component: EntidadEditarComponent,canActivate:[ AuthGuard ] },
  { path: 'empleados', component: EmpleadoListarComponent,canActivate:[ AuthGuard ] },
  { path: 'rolUsuario', component: RolUsuarioComponent,canActivate:[ AuthGuard ]},
  { path: 'usuario', component:UsuarioComponent,canActivate:[ AuthGuard ]},
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });
