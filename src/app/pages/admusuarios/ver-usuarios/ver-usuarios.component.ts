import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../core/interfaces/usuario';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [ModalComponent, AgregarUsuariosComponent, FormsModule],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent implements OnInit {
recibirData($event: Event) {
throw new Error('Method not implemented.');
}

    misUsuarios: Usuario[] = [];
    searchTerm: string = '';
  
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

    modalAbrir:boolean= false;
    modalAbrir2:boolean= false;
  
      funcionAbrir(){
        this.modalAbrir=true;
      }
      funcionAbrir2(user:string){
        this.modalAbrir2=true;

      }
  
      funcionCerrar(){
        this.modalAbrir=false;
      }
      
      funcionCerrar2(){
        this.modalAbrir2=false;
      }
    
      cerrarboton(evento:boolean){
        this.modalAbrir=false;
      }

  }



