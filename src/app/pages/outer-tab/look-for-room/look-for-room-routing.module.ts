import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LookForRoomPage} from "./look-for-room.page";

const routes: Routes = [
  {
    path: '',
    component: LookForRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookForRoomRoutingModule {
}
