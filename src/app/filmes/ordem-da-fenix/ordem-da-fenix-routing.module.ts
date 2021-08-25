import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemDaFenixPage } from './ordem-da-fenix.page';

const routes: Routes = [
  {
    path: '',
    component: OrdemDaFenixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemDaFenixPageRoutingModule {}
