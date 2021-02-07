import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadService } from '../../services/entidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidad-editar',
  templateUrl: './entidad-editar.component.html',
  styles: [
  ]
})
export class EntidadEditarComponent implements OnInit {

  entidad: any;
  id:string;

  constructor(private service:EntidadService,
              private route:ActivatedRoute,
              private router:Router ) { 
                this.id = this.route.snapshot.paramMap.get('id')!.toString();
              }

  ngOnInit() {    
    this.obtenerPorId();
  }

  obtenerPorId(){
    this.service.obtenerPorId(this.id).subscribe((data) => {
      if(data != undefined){
        this.entidad = data;
      }
    })
  }

  actualizarEntidad(f:NgForm){
    if(f.valid)
    {
      Swal.fire({
        title:'Cargando',
        text:'espere por favor'
      });
      Swal.showLoading();
        this.service.actualizarEntidad(this.entidad).subscribe((data)=>{
          if(data !== undefined){
            Swal.close();
            Swal.fire({
              title:'Correcto',
              text:'Entidad actualizada',
              allowOutsideClick: false
            })
              this.router.navigateByUrl('entidadListar');
          }else{
            Swal.close();
            Swal.fire({
              title:'error',
              text:'No se pudo actualizar'
            })
          }
        },(error)=>{
          Swal.close();
          Swal.fire({
            title:'error',
            text:error.error            
          })
        })
    }
  }


}
