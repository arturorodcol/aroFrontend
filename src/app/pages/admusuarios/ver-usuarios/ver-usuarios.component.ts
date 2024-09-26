import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../core/interfaces/usuario';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [ModalComponent, AgregarUsuariosComponent, FormsModule],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent implements OnInit {

    misUsuarios: Usuario[] = [];
    searchTerm: string = '';

    constructor(
      private usuarioService: UsuariosService
    ) {}
  
    ngOnInit(): void {

      this.usuarioService.getUsuarios().subscribe((data: any) => {
        console.log(data);
        this.misUsuarios = data.usuarios;
      });
        
    }

    // modalAbrir:boolean= false;
    // modalAbrir2:boolean= false;
  
    //   funcionAbrir(){
    //     this.modalAbrir=true;
    //   }
    //   funcionAbrir2(user:string){
    //     this.modalAbrir2=true;

    //   }
  
    //   funcionCerrar(){
    //     this.modalAbrir=false;
    //   }
      
    //   funcionCerrar2(){
    //     this.modalAbrir2=false;
    //   }
    
    //   cerrarboton(evento:boolean){
    //     this.modalAbrir=false;
    //   }

  }



