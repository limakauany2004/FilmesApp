import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdemDaFenixPageRoutingModule } from './ordem-da-fenix-routing.module';

import { OrdemDaFenixPage } from './ordem-da-fenix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemDaFenixPageRoutingModule
  ],
  declarations: [OrdemDaFenixPage]
})
export class OrdemDaFenixPageModule {}
