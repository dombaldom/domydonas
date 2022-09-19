import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/login', pathMatch: 'full'},   // Se redirige al modulo Home componente menu, el cual contiene el menú principal del sistema
  { path: 'forbidden', component: ForbiddenComponent},
  { path: '**', component: NotFoundComponent}
  
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
