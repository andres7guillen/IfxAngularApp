import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import { EmpleadoModel } from '../../models/empleado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styles: [
  ]
})
export class EmpleadoListarComponent implements OnInit {

  constructor(private entidadService: EntidadService,
    private empleadosService: EmpleadoService,
    private router: Router) { }

  listado: EmpleadoModel[] = [];

  ngOnInit() {
    this.empleadosService.obtenerEmpleados().subscribe(data => {
      if (data !== undefined) {
        this.listado = data;
        console.log(this.listado);
      }
    })
  }

  borrarEmpleado(empleado: EmpleadoModel, index: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + empleado.nombres + '?',
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if (resp.value) {
        this.empleadosService.borrarEmpleado(empleado.id).subscribe(data => {
          if (data != undefined) {
            this.empleadosService.obtenerEmpleados().subscribe(datad => {
              if (data !== undefined) {
                this.listado = datad;
                console.log(this.listado);
              }
            });
            Swal.fire({
              title: 'Correcto',
              text: 'Empleado:  ' + empleado.nombres + ' borrado correctamente',
              allowOutsideClick: false
            });
            this.router.navigateByUrl('empleados');
          }
        })
      }
    })

  }


}
