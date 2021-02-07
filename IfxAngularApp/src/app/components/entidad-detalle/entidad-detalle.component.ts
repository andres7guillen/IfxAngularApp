import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadService } from '../../services/entidad.service';

@Component({
  selector: 'app-entidad-detalle',
  templateUrl: './entidad-detalle.component.html',
  styles: [
  ]
})
export class EntidadDetalleComponent implements OnInit {

  entidad: any;
  id: string = '';
  constructor(private service: EntidadService,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.paramMap.get('id')!.toString();
    }

  ngOnInit() {    
    this.obtenerEntidadPorId();
  }

  obtenerEntidadPorId() {
    this.service.obtenerPorId(this.id).subscribe((data) => {
      if (data != undefined) {
        this.entidad = data;
      }
    });

  }

}
