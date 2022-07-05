import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models';
import { AppConfiguracionService } from './app-configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  userName: string = "tektutorialshub"
  
  

  constructor(private http: HttpClient, private config: AppConfiguracionService) { }

 public getData(){
    return this.http.get<Persona[]>(this.config.getConfig().GET_ALL_USER_URL)
      .subscribe( {
        next: (respuesta) => {
          console.log('respuesta recibida:' + respuesta);
        },
        error: (error)=> {
          console.log('Error' + error);
        },
        complete: () => {
          console.log('Proceso terminado.')
        }
       }
      )

    console.log('asdf');
    return 'jajjjajja';
  }

}
