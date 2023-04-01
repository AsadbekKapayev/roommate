import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LookForRoomPage} from "./look-for-room.page";
import {IonicModule} from "@ionic/angular";
import {NgxMaskModule} from "ngx-mask";
import {LookForRoomRoutingModule} from "./look-for-room-routing.module";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";
import {HeaderBackModule} from "../../../components/header/header-back/header-back.module";
import {PipesModule} from "../../../pipes/cores/pipes.module";
import {AdGridModule} from "../../../components/grids/ad-grid/ad-grid.module";

@NgModule({
  declarations: [LookForRoomPage],
  imports: [
    CommonModule,
    LookForRoomRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderBackModule,
    GuideGridModule,
    PipesModule,
    NgxMaskModule,
    AdGridModule,
  ]
})
export class LookForRoomModule {
}
