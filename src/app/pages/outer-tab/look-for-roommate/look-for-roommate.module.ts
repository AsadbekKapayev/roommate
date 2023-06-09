import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LookForRoommatePage} from "./look-for-roommate.page";
import {IonicModule} from "@ionic/angular";
import {NgxMaskModule} from "ngx-mask";
import {LookForRoommateRoutingModule} from "./look-for-roommate-routing.module";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";
import {HeaderModule} from "../../../components/header/header.module";
import {PipesModule} from "../../../pipes/cores/pipes.module";
import {RoomGridModule} from "../../../components/grids/room-grid/room-grid.module";
import {RoommateGridModule} from "../../../components/grids/roommate-grid/roommate-grid.module";

@NgModule({
  declarations: [LookForRoommatePage],
  imports: [
    CommonModule,
    LookForRoommateRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderModule,
    GuideGridModule,
    PipesModule,
    NgxMaskModule,
    RoomGridModule,
    RoommateGridModule,
  ]
})
export class LookForRoommateModule {
}
