import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConexionesService } from './conexiones.service';
import { EmpleadoModel } from '../models/empleado.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token')!.toString()
  });

  constructor(private http: HttpClient,
    private conn: ConexionesService) { }
    crearEmpleado(empleado:EmpleadoModel){
      return this.http.post(this.conn.urlEmpleado + "Crear",JSON.stringify(empleado),{headers: this.headers});
    }
  
    actualizarEmpleado(empleado?:EmpleadoModel):Observable<any>{
      return this.http.put(this.conn.urlEmpleado + "Actualizar",JSON.stringify(empleado),{headers: this.headers})
    }
  
    obtenerEmpleados():Observable<any>{
      return this.http.get(this.conn.urlEmpleado + 'ObtenerTodos')
      
    }
  
    obtenerEmpleadoPorId(id?:string): Observable<any>{
      return this.http.get(this.conn.urlEmpleado + 'ObtenerPorId?IdEmpleado='  + id);
    }
  
    borrarEmpleado(id?:string):Observable<any>{
      return this.http.delete(this.conn.urlEmpleado + 'Delete?EmpleadoId=' + id,{headers: this.headers});
    }
}
