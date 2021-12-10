import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { FormularioPessoasComponent } from './formulario-pessoas/formulario-pessoas.component';


@NgModule({
  declarations: [
    PessoaListarComponent,
    FormularioPessoasComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
