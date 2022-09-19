import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MessageErrorComponent } from './message-error/message-error.component';
import { LoadingMessageComponent } from './loading-message/loading-message.component';



/**********
 * Este modulo se comparte a travez de toda la aplicaci[on] a travez de otros modulos.
 */
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MessageErrorComponent,
    LoadingMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FooterComponent, 
    HeaderComponent,
    MessageErrorComponent,
    LoadingMessageComponent
  ]
})
export class ShareModule { }
