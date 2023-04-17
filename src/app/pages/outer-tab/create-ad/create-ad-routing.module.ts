import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAdPage} from "./create-ad.page";
import {AuthGuard} from "../../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CreateAdPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAdRoutingModule {
}
