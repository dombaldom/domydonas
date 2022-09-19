import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { MenuComprasComponent } from './components/menu-compras/menu-compras.component';
import { ShareModule } from '../share';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GruposComprasComponent } from './components/grupos-compras/grupos-compras.component';


@NgModule({
  declarations: [    
  
    MenuComprasComponent, GruposComprasComponent
  ],
  imports: [
    ShareModule,    
    FontAwesomeModule,    
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
