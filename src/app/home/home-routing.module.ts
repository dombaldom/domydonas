import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

      { path: 'home/menu', component: MenuComponent},
      { path: 'home/login', component: LogingComponent},
      { path: 'home/signup', component: RegistroComponent},
      { path: 'home', redirectTo: 'home/login', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
