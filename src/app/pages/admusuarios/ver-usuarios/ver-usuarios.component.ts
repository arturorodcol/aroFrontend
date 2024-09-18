import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../core/interfaces/usuario';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent implements OnInit {
    misUsuarios: Usuario[] = [];

    ngOnInit(): void {
        this.misUsuarios.push({
          _id: '1',
          nombre: 'Juan',
          email: 'juan@example.com',
          password: '123456',
          tipoDocumento: 'Cedula',
          numeroDocumento: '123456',
          login: 'juan@example.com',
          rol: 'ADMINISTRADOR',
          estado: false,
          createdAt: new Date(),
        });
        //Iteración para interface
        this.misUsuarios.forEach((usuario) => {
          console.log('Mis usuarios',usuario);
        });
    }
}
