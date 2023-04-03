import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoomDetailPage} from "./room-detail.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderModule} from "../../../components/header/header.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";
import {RoomDetailRoutingModule} from "./room-detail-routing.module";
import {PipesModule} from "../../../pipes/cores/pipes.module";
import {NgxMaskModule} from "ngx-mask";
import {RoomGridModule} from "../../../components/grids/room-grid/room-grid.module";

@NgModule({
  declarations: [RoomDetailPage],
  imports: [
    CommonModule,
    RoomDetailRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderModule,
    GuideGridModule,
    PipesModule,
    NgxMaskModule,
    RoomGridModule,
  ]
})
export class RoomDetailModule {
}
