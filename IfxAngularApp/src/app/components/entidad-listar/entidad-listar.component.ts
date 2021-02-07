import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadModel } from '../../models/entidad.model';
import { EntidadService } from '../../services/entidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidad-listar',
  templateUrl: './entidad-listar.component.html',
  styles: [
  ]
})
export class EntidadListarComponent implements OnInit {

  listado: EntidadModel[];

  constructor(private service:EntidadService,
              private router:Router) { 
                this.listado = [];
              }

  ngOnInit() {
    this.ObtenerTodas();
  }

  ObtenerTodas(){
    this.service.obtenerEntidades().subscribe((data) => {
      if(data != undefined){
        this.listado = data;
        console.log(this.listado);
      }
    });
  }

  borrarEntidad(entidad:EntidadModel,i:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + entidad.razonSocial + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminarEntidad(entidad.id).subscribe(data => {
          if(data != undefined){
            this.service.obtenerEntidades().subscribe(datad => {
              if(data !== undefined){
                this.listado = datad;                
              }
            });
            Swal.fire({
              title: 'Correcto',
              text: 'Entidad:  ' + entidad.razonSocial + ' borrada correctamente',
              allowOutsideClick: false
            });
            this.router.navigateByUrl('entidadListar');
          }
        })
      }
    })
  }

}
