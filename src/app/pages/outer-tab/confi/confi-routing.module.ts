import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfiPage} from "./confi.page";
import {AuthGuard} from "../../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ConfiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiRoutingModule {
}
