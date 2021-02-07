import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConexionesService } from './conexiones.service';
import { Usuario } from '../models/usuario.model';
import { UsuarioRolModel } from '../models/usuario.rol.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = '';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + 'dfdfdf' /*localStorage.getItem('token')!.toString()*/
  });

  constructor(private http:HttpClient,
    private conn:ConexionesService) { }

    Login(usuario:Usuario) {
      return this.http.post(this.conn.urlCuenta + '/Login', JSON.stringify(usuario),{headers: this.headers})
      .pipe(
        map((resp: any) => {
          this.guardarToken(resp['token']);
          return resp;
        })
      )
    }
     
    LogOut(){
      localStorage.removeItem('token');
    }
    
    CrearUsuario(usuario:Usuario) {
      return this.http.post(this.conn.urlCuenta + '/Crear', JSON.stringify(usuario),{headers: this.headers})
      .pipe(
        map((resp: any) => {
          this.guardarToken(resp['token']);
          return resp;
        })
      )
    }
  
    private guardarToken(token:string){
      this.userToken = token;
      localStorage.setItem('token',token);
    }
  
    leerToken():string{
      if(localStorage.getItem('token')){
        this.userToken = localStorage.getItem('token')!.toString();
      }else{
        this.userToken = '';
      }
      return this.userToken;
    }
  
    estaAutenticado():boolean {
      return this.userToken.length > 2;
    }
  
    asociarUsuarioRol(usuRol:UsuarioRolModel):Observable<any>{
      return this.http.post(this.conn.urlUsuario + 'AsignarRolUsuario', JSON.stringify(usuRol),{headers: this.headers});
    }
  
    RemoverUsuarioRol(usuRol:UsuarioRolModel){
      return this.http.post(this.conn.urlUsuario + 'RemoverRolUsuario', JSON.stringify(usuRol),{headers:this.headers});
    }
}
