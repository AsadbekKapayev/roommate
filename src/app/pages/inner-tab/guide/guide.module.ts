import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuideRoutingModule} from './guide-routing.module';
import {GuidePage} from "./guide.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderBackModule} from "../../../components/header/header-back/header-back.module";

@NgModule({
  declarations: [GuidePage],
  imports: [
    CommonModule,
    GuideRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderBackModule,
  ]
})
export class GuideModule {
}
