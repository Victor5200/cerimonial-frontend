import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';


@NgModule({
  declarations: [
    CadastrarEventoComponent,
    ListarEventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
