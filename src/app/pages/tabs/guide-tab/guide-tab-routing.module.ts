import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideTabPage } from './guide-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GuideTabPage,
    children: [
      {
        path: 'guide',
        loadChildren: () => import('app/pages/inner-tab/guide/guide.module').then(m => m.GuideModule),
      },
      {
        path: '',
        redirectTo: '/tabs/guide-tab/guide',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/guide-tab/guide',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideTabRoutingModule {}
