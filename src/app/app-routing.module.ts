import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/main/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sms',
        loadChildren: () => import('./pages/main/sms/sms.module').then(m => m.SmsModule)
      },
    ],
  },
  {
    path: 'outer-tab',
    children: [
      {
        path: 'guide-detail/:id',
        loadChildren: () => import('./pages/outer-tab/guide-detail/guide-detail.module').then(m => m.GuideDetailModule)
      },
      {
        path: 'ad-detail/:id',
        loadChildren: () => import('./pages/outer-tab/ad-detail/ad-detail.module').then(m => m.AdDetailModule)
      },
      {
        path: 'look-for-room',
        loadChildren: () => import('./pages/outer-tab/look-for-room/look-for-room.module').then(m => m.LookForRoomModule)
      },
      {
        path: 'look-for-roommate',
        loadChildren: () => import('./pages/outer-tab/look-for-roommate/look-for-roommate.module').then(m => m.LookForRoommateModule)
      },
    ],
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
