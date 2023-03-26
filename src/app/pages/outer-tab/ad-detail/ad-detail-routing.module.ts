import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdDetailPage} from "./ad-detail.page";

const routes: Routes = [
  {
    path: '',
    component: AdDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdDetailRoutingModule {
}
