import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListarCervejasComponent } from './components/listar-cervejas/listar-cervejas.component';
import { IncluirCervejasComponent } from './components/incluir-cervejas/incluir-cervejas.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cervejas', component: ListarCervejasComponent },
  { path: 'cadastrar', component: IncluirCervejasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
