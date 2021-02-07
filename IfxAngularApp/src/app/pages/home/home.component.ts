import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router) { }
    estaLogueado:boolean = false;

  ngOnInit(): void {
    this.estaLogueado = this.auth.estaAutenticado();
  }

  salir(){
    this.auth.LogOut();
    this.router.navigateByUrl('/login');
  }

}
