import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';

const routes: Routes = [
  {path:'cadastrar-eventos', component: CadastrarEventoComponent},
  {path:'', component: ListarEventosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
