import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { config } from '../../../../environments/configuration/config';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-agregar-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-usuarios.component.html',
  styleUrl: './agregar-usuarios.component.css'
})
export class AgregarUsuariosComponent {

  constructor(private usuarioService: UsuariosService) { }

  crearUsuario() {

    const nuevoUsuario = this.usuarioForm.value;

    if(this.usuarioForm.valid) {
      const data: UsuarioModel = {
        nombre: nuevoUsuario.nombre || '',
        email: nuevoUsuario.email || '',
        tipoDocumento: nuevoUsuario.tipoDocumento || '',
        numeroDocumento: Number(nuevoUsuario.numeroDocumento),
        login: nuevoUsuario.login || '',
        password: nuevoUsuario.password || '',
        rol: nuevoUsuario.rol || '',
      }; 

      this.usuarioService.crearUsuario(data).subscribe({
        next: (resp: any) => {
          console.log('Petición de usuario creada', resp);
        },
        error: (error: any) => {
          console.log('Error al crear la petición de creación de usuario',error);
        }
      });

    }

    console.log(`Enviando formulario de usuario ${this.usuarioForm.value}`);

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

}