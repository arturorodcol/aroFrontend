import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactoForm = new FormGroup({
    name: new FormControl ('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.email]),
    phone: new FormControl (''),
    reason: new FormControl (''),
    details: new FormControl ('')
  });

  enviarContacto() {
    console.log(`Enviando formulario de contacto ${this.contactoForm.value}`);
  }
}
