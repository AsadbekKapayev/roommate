import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('./home-tab/home-tab.module').then(m => m.HomeTabModule),
      },
      {
        path: 'favourites-tab',
        loadChildren: () => import('./favourite-tab/favourite-tab.module').then(m => m.FavouriteTabModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('./profile-tab/profile-tab.module').then(m => m.ProfileTabModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'guide-tab',
        loadChildren: () => import('./guide-tab/guide-tab.module').then(m => m.GuideTabModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
