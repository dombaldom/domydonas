import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    ShareModule,
    NgbModule,

    AppRoutingModule   // Colocar siempre al ultimo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }
}
