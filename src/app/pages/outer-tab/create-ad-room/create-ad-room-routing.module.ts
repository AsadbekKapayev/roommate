import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAdRoomPage} from "./create-ad-room.page";
import {AuthGuard} from "../../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CreateAdRoomPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAdRoomRoutingModule {
}
