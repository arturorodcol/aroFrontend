import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../core/interfaces/contacto.interface';
import { ContactoModel } from '../../core/models/contacto.model';
import { config } from '../../../environments/configuration/config';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos/contactos.service';


@Component({
  selector: 'app-admcontact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admcontact.component.html',
  styleUrl: './admcontact.component.css'
})
export class AdmcontactComponent implements OnInit {
  
  misContactos: Contacto[] = [];
  contactos: ContactoModel[] = [];
  roles = config.roles;
  searchTerm: string = '';
  filteredData: any[] = [];

  constructor(
    private contactoService: ContactosService,
  ) {}
  
  ngOnInit(): void {
    this.contactoService.getContacto().subscribe((data: any) => {
      console.log(data);
      this.misContactos = data.contactos;
    });
  }

  filterData(): void {

    if (!this.searchTerm.trim()) {
      this.filteredData = [...this.contactos];
      return;
    }

    const searchTermLower = this.searchTerm.trim().toLowerCase();
    this.filteredData = this.contactos.filter((item: any) => {
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
