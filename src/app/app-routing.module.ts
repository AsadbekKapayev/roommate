import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {  path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
