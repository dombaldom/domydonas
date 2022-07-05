import { NgModule } from '@angular/core';import { } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LogingComponent } from './components/loging/loging.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShareModule } from '../share';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    LogingComponent,
    MenuComponent,
    RegistroComponent
  ],
  imports: [        
    ShareModule,
    HomeRoutingModule
    
  ]
})
export class HomeModule { }
