import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheHalfOfItPageRoutingModule } from './the-half-of-it-routing.module';

import { TheHalfOfItPage } from './the-half-of-it.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheHalfOfItPageRoutingModule
  ],
  declarations: [TheHalfOfItPage]
})
export class TheHalfOfItPageModule {}
