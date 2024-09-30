import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Taller } from '../../../core/interfaces/taller.interface';
import { ModalComponent } from '../../../components/modal/modal.component';
import { AgregarTalleresComponent } from '../agregar-talleres/agregar-talleres.component';
import { TalleresService } from '../../../services/talleres/talleres.service';
import { TallerModel } from '../../../core/models/taller.model';
import { config } from '../../../../environments/configuration/config';

@Component({
  selector: 'app-ver-talleres',
  standalone: true,
  imports: [ModalComponent, AgregarTalleresComponent, FormsModule],
  templateUrl: './ver-talleres.component.html',
  styleUrl: './ver-talleres.component.css'
})
export class VerTalleresComponent implements OnInit{
   
  misTalleres: Taller[] = []; 
  // tallerSuscription: Subscription
  talleres: TallerModel[] = [];
  roles = config.roles;
  searchTerm: string = '';
  filteredData: any[] = []; 

  constructor(
    private tallerService: TalleresService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.tallerService.getTalleres().subscribe((data: any) => {
      console.log(data);
      this.misTalleres = data.talleres;
    });
  }

  agregarTaller() {
    this.router.navigateByUrl('agregar-talleres');
  }

  filterData(): void {

  if (!this.searchTerm.trim()) {
    this.filteredData = [...this.talleres];
    return;
  }

  const searchTermLower = this.searchTerm.trim().toLowerCase();
    this.filteredData = this.talleres.filter((item: any) => {
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