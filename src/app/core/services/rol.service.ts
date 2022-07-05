import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { AppConfiguracionService } from './app-configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private conf: AppConfiguracionService, private  http: HttpClient) { }

/**
 * Regresa la lista de roles desde el backend.
 Array<Rol> </Rol>* getRoles
 */
public getRoles(): Observable<any> {
  return this.http.get(this.conf.getConfig().GET_ALL_ROLE_URL);
}

}
