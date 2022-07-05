import { Injectable } from '@angular/core';
import { AppConfiguracionService } from './app-configuracion.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = "auth-user";


/****
 * Administra el token del usuario firmado y los datos del usuario: username, email, roles, color preferences, etc
 */
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private config: AppConfiguracionService) { }

  /***
   * Elimina datos del token y usuario de la sesion
   */
  public signout(): void{
    window.sessionStorage.clear();
  }

  /**
   * Guarda un token en la session, elimina antes si existe.
   * @param token 
   */
  public saveToken(token: any): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  /******
   * Regresa el token de la seci[on] actual.
   */
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  /******
   * Salva el usuario que ser[a] duenio de la seci['on], el objeto se guarda como JSON
   */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  /****
   * Obtiene el usuario de la sesi[on] y lo regresa, si no existe regresa null
   */
  public getUser(): string | null {
    const us =   window.sessionStorage.getItem(USER_KEY);

    if (us) {
      return JSON.parse(us);
    }
    return null;
  }

}
