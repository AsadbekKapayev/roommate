import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteTabPage } from './favourite-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteTabPage,
    children: [
      {
        path: 'favourites',
        loadChildren: () => import('app/pages/inner-tab/favourites/favourites.module').then(m => m.FavouritesModule),
      },
      {
        path: '',
        redirectTo: '/tabs/favourites-tab/favourites',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/favourites-tab/favourites',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteTabRoutingModule {}
