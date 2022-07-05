import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageErrorService {

  // Varible tipo Subject (observer) que mantiene los mensajes de error originados en el global handler error, 
  private readonly mensajesError$ = new Subject<any>();

  // Carga el Subject con mensaje y lo envia a los subscriptores, el subscriptor al escuchar el mensaje 
  // 1) el global handler error regresa error, muestra dialogo con el error y redirije flujo
  muestraMensaje(error: string) {
    this.mensajesError$.next({text: error});
  }


// regresa el subject con los mensajes
public mensajes$() {
  return this.mensajesError$.asObservable();
}

public ocultaMensaje() {
    this.mensajesError$.next('close');  
  
}
  


}
