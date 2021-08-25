import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cruella',
    loadChildren: () => import('./filmes/cruella/cruella.module').then( m => m.CruellaPageModule)
  },

  {
    path: 'miraculous',
    loadChildren: () => import('./filmes/miraculous/miraculous.module').then( m => m.MiraculousPageModule)
  },
  {
    path: 'the-half-of-it',
    loadChildren: () => import('./filmes/the-half-of-it/the-half-of-it.module').then( m => m.TheHalfOfItPageModule)
  },
  {
    path: 'raya',
    loadChildren: () => import('./filmes/raya/raya.module').then( m => m.RayaPageModule)
  },
  {
    path: 'ordem-da-fenix',
    loadChildren: () => import('./filmes/ordem-da-fenix/ordem-da-fenix.module').then( m => m.OrdemDaFenixPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
