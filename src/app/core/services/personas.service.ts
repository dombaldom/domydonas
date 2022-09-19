import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models';
import { AppConfiguracionService } from './app-configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  
  

  constructor(private http: HttpClient, private config: AppConfiguracionService) { }

 public getAllUsers(){
      return this.http.get(this.config.getConfig().GET_ALL_USER_URL);
  }

}
