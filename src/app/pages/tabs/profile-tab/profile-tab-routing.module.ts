import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileTabPage } from './profile-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTabPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('app/pages/inner-tab/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: '',
        redirectTo: '/tabs/profile-tab/profile',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/profile-tab/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileTabRoutingModule {}
