import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracion } from '../models/configuracion';

/**********
 * Servicio que lee el archivo app.config.json y lo encapsula en la interfas 'Configuracion', esta clase guarda los valores
 * estaticos que se utilizan en la aplicacion en tiempo de ejecuci[on com son constantes con urls, codigos de colores, etc. 
 */
@Injectable({
  providedIn: 'root'
})
export class AppConfiguracionService {

  // La carga del archivo se hace desde el modulo core, ver definicion en core.module.ts
  private configura?: Configuracion;
  private loaded = false;

  constructor(private http: HttpClient) { }

  // Esta carga inicial del archivo se realiza en core.module.ts utilizando el provider APP_INITIALIZER
  public loadConfig(): Promise<void> {
    return this.http.get<Configuracion>('../../../assets/config/app.config.json')
    .toPromise()
    .then(data => {
      this.configura = data;
      this.loaded = true;
    })
  }

  public getConfig(): Configuracion {
    return this.configura as Configuracion;
  }

}
