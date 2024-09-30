import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contacto } from '../../core/interfaces/contacto.interface';
import { ContactoModel } from '../../core/models/contacto.model';
import { config } from '../../../environments/configuration/config';
import { ContactosService } from '../../services/contactos/contactos.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private contactoService: ContactosService) { }

  crearPeticionContacto() {

    const nuevoContacto = this.contactoForm.value;

    if(this.contactoForm.valid) {  
      const data: ContactoModel = {
        nombre: nuevoContacto.nombre || '',
        telefono: nuevoContacto.telefono || '',
        correo: nuevoContacto.correo || '',
        descripcion: nuevoContacto.descripcion || '',
        detalles: nuevoContacto.detalles || '',
      };

      this.contactoService.crearPeticionContacto(data).subscribe({
        next: (resp: any) => {
          console.log('Petición de contacto creada', resp)
        },
        error: (error: any) => {
          console.log('Error al crear la petición de contacto', error)
        }
      });      
    }

    console.log(`Enviando formulario de contacto ${this.contactoForm.value}`);

  }

  contactoForm = new FormGroup({
    nombre: new FormControl ('', Validators.required),
    telefono: new FormControl ('', Validators.required),
    correo: new FormControl ('', [Validators.required, Validators.email]),
    descripcion: new FormControl ('', Validators.required),
    detalles: new FormControl ('', Validators.required)
  });

}
