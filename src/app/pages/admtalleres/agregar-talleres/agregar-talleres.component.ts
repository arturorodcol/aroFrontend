import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { config } from '../../../../environments/configuration/config';

@Component({
  selector: 'app-agregar-talleres',
  standalone: true,
  imports: [ModalComponent, FormsModule, RouterLink],
  templateUrl: './agregar-talleres.component.html',
  styleUrl: './agregar-talleres.component.css'
})
export class AgregarTalleresComponent implements OnInit {

  roles = config.roles;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
