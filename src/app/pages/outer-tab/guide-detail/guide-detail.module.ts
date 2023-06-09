import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuideDetailRoutingModule} from './guide-detail-routing.module';
import {GuideDetailPage} from "./guide-detail.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderModule} from "../../../components/header/header.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";

@NgModule({
  declarations: [GuideDetailPage],
  imports: [
    CommonModule,
    GuideDetailRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderModule,
    GuideGridModule,
  ]
})
export class GuideDetailModule {
}
