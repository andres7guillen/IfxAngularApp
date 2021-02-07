import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from '../../models/empleado.model';
import { EntidadModel } from '../../models/entidad.model';
import { EmpleadoService } from '../../services/empleado.service';
import { EntidadService } from '../../services/entidad.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styles: [
  ]
})
export class EmpleadoCrearComponent implements OnInit {
  empleado:EmpleadoModel = new EmpleadoModel();
  listadoEntidades:EntidadModel[] = [];

  constructor(private empleadoService:EmpleadoService,
    private entidadService:EntidadService,
    private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit() {
      this.entidadService.obtenerEntidades().subscribe(data => {      
        this.entidadService.obtenerEntidades().subscribe(data => {      
          this.listadoEntidades = data;    
          console.log('ENTIDADEEEEEEEES:',this.listadoEntidades);    
        });
      });      
    }

    guardar(form:NgForm){
    
      Swal.fire({
        title:'Cargando',
        text: 'Guardando información',
        // type: 'info',
        allowOutsideClick: false
      });
  
      Swal.showLoading();
      
  
      if(form.valid){      
        this.empleadoService.crearEmpleado(this.empleado).subscribe(data => {
          if(data !== undefined){
            Swal.close();
            this.router.navigateByUrl('/empleados');
  
          }
        },(error)=>{        
          Swal.close();
          Swal.fire({
            title:'Error',
            text: error.message,
            // type: 'info',
            allowOutsideClick: false
          });
        })
  
      }
    }

}
