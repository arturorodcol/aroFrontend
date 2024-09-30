import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { config } from '../../../../environments/configuration/config';

@Component({
  selector: 'app-agregar-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-usuarios.component.html',
  styleUrl: './agregar-usuarios.component.css'
})
export class AgregarUsuariosComponent implements OnInit {

  // usuarioForm: FormGroup;
  roles = config.roles; 

  ngOnInit(): void {
    
  } 

  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    tipoDocumento: new FormControl('',Validators.required),
    numeroDocumento: new FormControl('',Validators.required),
    login: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required),
  });

  agregarUsuario() {

  }

}