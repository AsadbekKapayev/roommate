import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LookForRoommatePage} from "./look-for-roommate.page";

const routes: Routes = [
  {
    path: '',
    component: LookForRoommatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookForRoommateRoutingModule {
}
