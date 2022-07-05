import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  // Varible tipo Subject (observer) que mantiene los mensajes de error y espera en el request, 
  private readonly mensajesError$ = new Subject<string>();

// regresa el subject con los mensajes
public loading$() {
  return this.mensajesError$.asObservable();
}

// Carga el Subject con mensaje y lo envia a los subscriptores, el subscriptor al escuchar el mensaje 
// abre 1 o 2 cuadros de dialogo acorde al tipo de mensaje: 
// 1) dialogo espera, (una vez que el servidor responde el request y regresa datos al cliente 'response' este mensaje se cierra) y solo si
// 2) el response regresa error, muestra otro dialogo con el error y redirije flujo, el otro dialogo lo maneja el message-error service.
public muestraLoading() {
  console.log('open loading');
  
  this.mensajesError$.next('open');
}


public ocultaLoading() {
    this.mensajesError$.next('close');  
  
}

public ocultaLoadingError() {
  this.mensajesError$.next('error');  

}
  

}
