import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguracionService } from './app-configuracion.service';

/**********
 * Servicio para dar de alta clientes en la p[agina] o para autenticarse
 */

const http_options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Injecta el cliente http para realizar las peticiones al backend
  constructor(private http: HttpClient, private config: AppConfiguracionService) { }

  // Envia al backend username y password en un post con formato json para su autenticaci[on], regresa la respuesta envuelta en un observable
  login(username: string, password: string): Observable<any> {
    return this.http.post( this.config.getConfig().AUTHENTICATE_API_SIGNIN ,{
                          username, password }, http_options  );
  }

  // Envia al backend datos del usuario a registrarse en el sistema, formato json en un post. Regresa Option
  registrar(username: string, password: string, email: string): Observable<any> {
    return this.http.post(this.config.getConfig().AUTHENTICATE_API_SIGNUP, {
      username, password, email }, http_options);
  }



}
