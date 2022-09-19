import { Injectable } from '@angular/core';
import { AppConfiguracionService } from './app-configuracion.service';


/*********
 * Se encarga de administrar el manejo de la secion. Guarda usuario, contrasenias, etc.
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private config: AppConfiguracionService) { }

  // Limpia todas las variables de la session
  public clean(): void {
    window.sessionStorage.clear();
  }


  // Guarda en secion el nombre del usuario
  public guardaUsuario(usuario: any): void {
    window.sessionStorage.removeItem(this.config.getConfig().SESSION_KEY);
    window.sessionStorage.setItem(this.config.getConfig().SESSION_KEY, usuario);

  }

  // Regresa al usuario de la secion, si no hay registro regresa un objeto vacio
  public getUsuario(): any{
    const usuario = window.sessionStorage.getItem(this.config.getConfig().SESSION_KEY);

    if(usuario){
      return JSON.parse(usuario);
    }
    return {};
  }


  // Si hay un usuario registrado en la secion regresa true
  public isLoggedIn(): boolean{
    const usuario = window.sessionStorage.getItem(this.config.getConfig().SESSION_KEY);

    if(usuario){
      return true;
    }
    return false;
    
  }

  

}
