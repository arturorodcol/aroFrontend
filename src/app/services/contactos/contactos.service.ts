import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from '../../core/models/contacto.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  constructor(private httpClient: HttpClient) { }

  getContacto() {
    return this.httpClient.get(`${base_url}/contacto`
      //, this.headers
    );
  }

  crearPeticionContacto(contacto: ContactoModel) {
    return this.httpClient.post(`${base_url}/contacto`, contacto
    );
  }
  
}
