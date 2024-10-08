import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBibliotecaPageRoutingModule } from './my-biblioteca-routing.module';

import { MyBibliotecaPage } from './my-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBibliotecaPageRoutingModule
  ],
  declarations: [MyBibliotecaPage]
})
export class MyBibliotecaPageModule {}
