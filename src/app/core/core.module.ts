import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfiguracionService } from './services/app-configuracion.service';
import { AppHttpInterceptorService } from './services/app-http-interceptor.service';
import { ErrorGlobalHandlerService } from './services/error-global-handler.service';



export function initConfig(appConfig: AppConfiguracionService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfiguracionService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorGlobalHandlerService      
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { 
  // Solo se puede agregar en el modulo principal ya que el modulo 'core' debe ser Singleton.
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("El modulo solo se puede importar en el modulo root");  
    }
    
  }

}
