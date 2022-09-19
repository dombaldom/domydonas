import { NgModule } from '@angular/core';import { } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LogingComponent } from './components/loging/loging.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShareModule } from '../share';
import { RegistroComponent } from './components/registro/registro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    LogingComponent,
    MenuComponent,
    RegistroComponent
  ],
  imports: [        
    ShareModule,
    HomeRoutingModule,
    FontAwesomeModule
    
  ]
})
export class HomeModule {
  constructor() {
    library.add(fas);
  }

 }
