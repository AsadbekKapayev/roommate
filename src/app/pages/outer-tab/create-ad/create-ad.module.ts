import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateAdPage} from "./create-ad.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderModule} from "../../../components/header/header.module";
import {GuideGridModule} from "../../../components/grids/guide-grid/guide-grid.module";
import {CreateAdRoutingModule} from "./create-ad-routing.module";
import {PipesModule} from "../../../pipes/cores/pipes.module";
import {NgxMaskModule} from "ngx-mask";
import {AdGridModule} from "../../../components/grids/ad-grid/ad-grid.module";
import {FilterItemModule} from "../../../components/filter-item/filter-item.module";
import {CustomCheckboxModule} from "../../../components/custom-checkbox/custom-checkbox.module";

@NgModule({
  declarations: [CreateAdPage],
  imports: [
    CommonModule,
    CreateAdRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderModule,
    GuideGridModule,
    PipesModule,
    NgxMaskModule,
    AdGridModule,
    FilterItemModule,
    CustomCheckboxModule,
  ]
})
export class CreateAdModule {
}
