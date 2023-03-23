import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidePage} from "./home.page";

const routes: Routes = [
  {
    path: '',
    component: GuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
