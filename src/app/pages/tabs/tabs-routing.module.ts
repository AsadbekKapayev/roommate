import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-tab/home-tab.module').then(m => m.HomeTabModule)
      },
      {
        path: 'favourites',
        loadChildren: () => import('./favourite-tab/favourite-tab.module').then(m => m.FavouriteTabModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile-tab/profile-tab.module').then(m => m.ProfileTabModule)
      },
      {
        path: 'guide',
        loadChildren: () => import('./guide-tab/guide-tab.module').then(m => m.GuideTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
