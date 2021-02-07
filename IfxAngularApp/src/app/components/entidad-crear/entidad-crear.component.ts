import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EntidadModel } from '../../models/entidad.model';
import { EntidadService } from '../../services/entidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidad-crear',
  templateUrl: './entidad-crear.component.html',
  styles: [
  ]
})
export class EntidadCrearComponent implements OnInit {
  entidad:EntidadModel;


  constructor(private service:EntidadService,
              private router:Router) {
                this.entidad = new EntidadModel();
               }

  ngOnInit() {
    this.entidad = new EntidadModel();
  }

  guardar(f:NgForm){
    if(f.valid){
      this.service.crearEntidad(this.entidad).subscribe((data) => {
        if(data != undefined){
          Swal.fire({
            title:'Info',
            text:'Entidad creada',
            allowOutsideClick: false
          });
          this.router.navigateByUrl('entidadListar');
        }
      })
    }
  }

}
