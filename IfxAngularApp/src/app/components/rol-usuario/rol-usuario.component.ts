import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioRolModel } from '../../models/usuario.rol.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-rol-usuario',
  templateUrl: './rol-usuario.component.html',
  styles: [
  ]
})
export class RolUsuarioComponent implements OnInit {

  usuarioRol: UsuarioRolModel;

  constructor(private service:AuthService,
              private router:Router) {
                this.usuarioRol = new UsuarioRolModel();
               }

  ngOnInit() {
    this.usuarioRol = new UsuarioRolModel();
  }

  asociar(){
    this.service.asociarUsuarioRol(this.usuarioRol).subscribe((data) => {      
      Swal.fire({title:'Info',
          text:'Se asocio el usuario: ' + this.usuarioRol.UsuarioEmail + ' con el rol: ' + this.usuarioRol.Rol + ' correctamente',
          allowOutsideClick: false});
          this.router.navigateByUrl('empleados');

    },(error)=> {debugger
      Swal.fire({title:'ERROR',
      text:'Error asociando al usuario: ' + this.usuarioRol.UsuarioEmail + ' con el rol: ' + this.usuarioRol.Rol + '',
      allowOutsideClick: false});
      this.router.navigateByUrl('empleados');
    })
  }

  remover(){
    this.service.RemoverUsuarioRol(this.usuarioRol).subscribe((data) => {
      
        Swal.fire({title:'Info',
          text:'Se removio el usuario: ' + this.usuarioRol.UsuarioEmail + ' con el rol: ' + this.usuarioRol.Rol + ' correctamente',
          allowOutsideClick: false});
          this.router.navigateByUrl('empleados');
        
    },(error)=> {debugger
      Swal.fire({title:'ERROR',
      text:'Error removiendo al usuario: ' + this.usuarioRol.UsuarioEmail + ' con el rol: ' + this.usuarioRol.Rol + '',
      allowOutsideClick: false});
      this.router.navigateByUrl('empleados');
    })
  }


}
