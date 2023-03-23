import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {GuidePage} from "./home.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderBackModule} from "../../../components/header/header-back/header-back.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";

@NgModule({
  declarations: [GuidePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderBackModule,
    GuideGridModule,
  ]
})
export class HomeModule {
}
