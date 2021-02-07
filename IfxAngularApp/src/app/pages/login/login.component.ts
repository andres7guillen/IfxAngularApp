import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import  Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private auth:AuthService, private router:Router) { 
    this.usuario = new Usuario();
  }


  ngOnInit(): void {
    
  }

  onLogin(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'info',text:'espere por favor...',
                allowOutsideClick:false
    });
      Swal.showLoading();
      
      this.auth.Login(this.usuario).subscribe(data => {
        Swal.close();
        console.log(data);
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al autenticar',text:error.error });

        console.log(error.error);
      })
    }
  }

}
