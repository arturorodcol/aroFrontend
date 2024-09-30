import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../core/interfaces/usuario.interface';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { config } from '../../../../environments/configuration/config';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [ModalComponent, AgregarUsuariosComponent, FormsModule],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent implements OnInit {

    //llamado basico
    misUsuarios: Usuario[] = [];
    // usuarioSubscription: Subscription
    // llamado desde el modelo
    usuarios: UsuarioModel[] = [];
    // usuarioLogin: UsuarioModel;
    roles = config.roles;
    searchTerm: string = '';
    filteredData: any[] = []; 

    constructor(
      private usuarioService: UsuariosService,
      private router: Router,
    ) {}
  
    ngOnInit(): void {

      this.usuarioService.getUsuarios().subscribe((data: any) => {
        console.log(data);
        this.misUsuarios = data.usuarios;
      });
        
    }

    agregarUsuario() {
      this.router.navigateByUrl('agregar-usuarios'); 
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

    filterData(): void {

      if (!this.searchTerm.trim()) {
        this.filteredData = [...this.usuarios];
        return;
      }
  
      const searchTermLower = this.searchTerm.trim().toLowerCase();
      this.filteredData = this.usuarios.filter((item: any) => {
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            const value = item[key];
            if (
              typeof value === 'string' &&
              value.toLowerCase().includes(searchTermLower)
            ) {
              return true;
            }
          }
        }
        return false;
      });
    }

  }



