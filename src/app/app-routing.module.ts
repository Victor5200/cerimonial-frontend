
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa', loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'eventos', loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
