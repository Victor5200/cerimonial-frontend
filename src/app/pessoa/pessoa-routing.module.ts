import { FormularioPessoasComponent } from './formulario-pessoas/formulario-pessoas.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: PessoaListarComponent},
  {path:'formulario', component: FormularioPessoasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
