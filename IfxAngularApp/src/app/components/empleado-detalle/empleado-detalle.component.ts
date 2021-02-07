import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styles: [
  ]
})
export class EmpleadoDetalleComponent implements OnInit {

  id:string;
  empleado:any;

  constructor(private route:ActivatedRoute,
    private empleadoService:EmpleadoService) 
    { 
      this.id = this.route.snapshot.paramMap.get('id')!.toString();
    }

  ngOnInit() {
    
    this.obtenerEmpleadoPorId();
  }

  obtenerEmpleadoPorId(){
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe((data)=>{
      if(data !== undefined){
        this.empleado = data;
        console.log(data);
      }
    })
  }

}
