import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { faCircle,faKey,faSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare, faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ComprasModule } from './compras/compras.module';
 

@NgModule({
  declarations: [ AppComponent, ForbiddenComponent],
  imports: [
    BrowserModule,
    HomeModule,
    ComprasModule,
    CoreModule,
    ShareModule,
    NgbModule,
    FontAwesomeModule,
    

    AppRoutingModule   // Colocar siempre al ultimo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
 
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircle,faSquare,farCircle,farSquare, faUser, farUser, faKey
          ,faStackOverflow,faGithub,faMedium);
  }
}
