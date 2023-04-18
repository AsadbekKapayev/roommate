import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginEmailPage} from "./login-email.page";

const routes: Routes = [
  {
    path: '',
    component: LoginEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEmailRoutingModule {
}
