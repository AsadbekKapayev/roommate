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
      {
        path: 'register',
        loadChildren: () => import('./pages/main/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'login-email',
        loadChildren: () => import('./pages/main/login-email/login-email.module').then(m => m.LoginEmailModule)
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
        path: 'room-detail/:id',
        loadChildren: () => import('./pages/outer-tab/room-detail/room-detail.module').then(m => m.RoomDetailModule)
      },
      {
        path: 'roommate-detail/:id',
        loadChildren: () => import('./pages/outer-tab/roommate-detail/roommate-detail.module').then(m => m.RoommateDetailModule)
      },
      {
        path: 'look-for-room',
        loadChildren: () => import('./pages/outer-tab/look-for-room/look-for-room.module').then(m => m.LookForRoomModule)
      },
      {
        path: 'look-for-roommate',
        loadChildren: () => import('./pages/outer-tab/look-for-roommate/look-for-roommate.module').then(m => m.LookForRoommateModule)
      },
      {
        path: 'create-ad',
        loadChildren: () => import('./pages/outer-tab/create-ad/create-ad.module').then(m => m.CreateAdModule)
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
