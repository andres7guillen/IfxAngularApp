import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EntidadModel } from '../models/entidad.model';
import { ConexionesService } from './conexiones.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token')!.toString()
  });

  constructor(private http: HttpClient,
    private conn: ConexionesService) { }

    obtenerEntidades():Observable<any>{    
      return this.http.get(this.conn.urlEntidad + 'ObtenerTodas',{headers: this.headers});      
    }
  
    eliminarEntidad(EntidadId?:string):Observable<any>{    
      return this.http.delete(this.conn.urlEntidad + 'Eliminar?EntidadId=' + EntidadId,{headers: this.headers});
    }
  
    
  
    crearEntidad(entidad:EntidadModel):Observable<any>{
      return this.http.post(this.conn.urlEntidad + 'Crear' , JSON.stringify(entidad)   ,{headers: this.headers })
    }
  
    obtenerPorId(id?:string):Observable<any>{
      return this.http.get(this.conn.urlEntidad + 'ObtenerPorId?IdEntidad=' + id ,{headers: this.headers});
    }
  
    actualizarEntidad(entidad?:EntidadModel):Observable<any>{
      return this.http.put(this.conn.urlEntidad + 'Actualizar', JSON.stringify(entidad),{headers: this.headers});
    }



}
