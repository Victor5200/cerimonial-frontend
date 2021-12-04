import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';


@NgModule({
  declarations: [
    PessoaListarComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
