import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionesService {
  public urlEmpleado:string = 'https://localhost:44373/api/Empleado/';
    public urlCuenta:string = 'https://localhost:44373/api/Cuenta';
    public urlEntidad:string = 'https://localhost:44373/api/Entidad/';
    public urlUsuario:string = 'https://localhost:44373/api/Usuario/';

  constructor() { }
}
