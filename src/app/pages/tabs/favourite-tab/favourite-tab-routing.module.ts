import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteTabPage } from './favourite-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteTabRoutingModule {}
