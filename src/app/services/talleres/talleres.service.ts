import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TallerModel } from '../../core/models/taller.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TalleresService {

  constructor(private httpClient: HttpClient) { }

  getTalleres() {
    return this.httpClient.get(`${base_url}/taller`);
  }

  crearTaller(taller: TallerModel) {
    return this.httpClient.post(`${base_url}/taller`, taller
      //, this.headers
    );
  }

  actualizarTaller(taller: TallerModel) {
    return this.httpClient.put(`${base_url}/taller/${taller._id}`,taller
    //, this.headers
    );
  }

  eliminarunTaller(id: string) {
    return this.httpClient.delete(`${base_url}/taller/${id}` 
    // this.headers
    );
  }


  
}
