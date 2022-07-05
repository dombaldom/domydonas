import { ErrorHandler, Injectable } from '@angular/core';
import { MessageErrorService } from './message-error.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorGlobalHandlerService implements ErrorHandler {

  constructor(private messageService: MessageErrorService) { }


  // Cacha cualquier error generado en el sistema y lo envia via servicio de mensaje de errores al cuadro de dialogo que
  // lo presentara al usuario 
  handleError(error: any): void {
    this.messageService.muestraMensaje(error);    
  }
}
