import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EntidadService } from '../../services/entidad.service';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styles: [
  ]
})
export class EmpleadoEditarComponent implements OnInit {

  listado:any;
  id:string;
  empleado:any;
  constructor(private entidadService:EntidadService,
              private route:ActivatedRoute,
              private empleadoService:EmpleadoService,
              private router:Router) { 
                this.id = this.route.snapshot.paramMap.get('id')!.toString();
              }

  ngOnInit() {
    this.entidadService.obtenerEntidades().subscribe(data => {      
      this.listado = data;
      this.obtenerPorId();
    });      
  }

  obtenerPorId(){
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe((data) => {
      if(data !== undefined){
        this.empleado = data;
      }
    })
  }

  actualizarEmpleado(f:NgForm)
  {
    if(f.valid)
    {
      Swal.fire({
        title:'Cargando',
        text:'espere por favor'
      });
      Swal.showLoading();
        this.empleadoService.actualizarEmpleado(this.empleado).subscribe((data)=>{
          if(data !== undefined){
            Swal.close();
            Swal.fire({
              title:'Correcto',
              text:'Empleado actualizado',
              allowOutsideClick: false
            })
              this.router.navigateByUrl('empleados');
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
