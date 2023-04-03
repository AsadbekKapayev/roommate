import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoommateDetailPage} from "./roommate-detail.page";

const routes: Routes = [
  {
    path: '',
    component: RoommateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoommateDetailRoutingModule {
}
