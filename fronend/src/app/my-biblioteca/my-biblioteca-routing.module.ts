import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBibliotecaPage } from './my-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: MyBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBibliotecaPageRoutingModule {}
