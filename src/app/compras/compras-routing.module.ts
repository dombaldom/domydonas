import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComprasComponent } from './components/grupos-compras/grupos-compras.component';
import { MenuComprasComponent } from './components/menu-compras/menu-compras.component';


const routes: Routes = [

  { path: 'compras/menu', component: MenuComprasComponent},
  { path: 'compras/grupos', component: GruposComprasComponent},
  { path: 'compras', redirectTo: 'compras/menu', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
