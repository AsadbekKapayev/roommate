import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuideDetailPage} from "./guide-detail.page";

const routes: Routes = [
  {
    path: '',
    component: GuideDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideDetailRoutingModule {
}
