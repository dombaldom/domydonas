import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { LoadingService } from './loading.service';

/**********
 * Intercepta culquier request y response, 
 */
@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenStorageService, private loadingService: LoadingService) { }

  // Intercepta cualquier http
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
        // Inicia request. lanza mensaje de esperaal Observable del servicio de loading, con esto el modal se abre con mensaje 'espere'
        this.loadingService.muestraLoading();
        var messError: any = '';
    
    console.log('interceptado');    
    let authenticationRequest = req;
    // Bandera para saber si hubo error y en este caso realizar el cierre del cuadro de dialogo inmediatamente.
    let hayError: boolean = false;

    // Obtiene el token almacenado en la sesion, este token se debio haber cargado en el login.
    const token = this.tokenService.getToken();

    // Si el token exsite el usuario esta firmado, por tanto puede enviar request:
    // clona el request y agrega al header Autorization, bearer con el token
    if (token != null) {
      authenticationRequest = authenticationRequest.clone(
        {
          headers: req.headers.set("Authorization", 'Bearer ' + token)
        }
      ) ;     
    }

    
    // Envia el request al backend
    return next.handle(req).pipe(
      
      // Recibe response si hay error,  el modal de 'Espere.....' (loading) se cierra y lanza nuevo modal con error:
      catchError((e) => {
        hayError = true;
        // Envia error, lo cacha el servicio de error-message y abre didalgo para mostrarlo

        if(e.error !== null && e.error.mensaje !== undefined ) {
          return throwError(e.error.mensaje + ' ' + e.error.origen + ' ' + e.error.url);
        } else {
          let errMessage = e.status === 401 ? e.message + ' No esta autorizado para ver esta pagina ' : e.message;
          return throwError(errMessage);
        }

        
      }),
      finalize(() => {
        // Al recibir la respuesta, cierra el cuadro de loading, si hay error de forma imediata, si no realiza una espera de 3 segundos
        if (hayError) {
          this.loadingService.ocultaLoadingError();  
        } else {
          this.loadingService.ocultaLoading();
        }
        
      })
    ) as Observable<HttpEvent<any>>;
  }
}
