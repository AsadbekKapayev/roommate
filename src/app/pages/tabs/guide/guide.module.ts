import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuidePage } from './guide.page';

import {ExploreContainerComponentModule} from "../../../explore-container/explore-container.module";
import {GuideRoutingModule} from "./guide-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GuideRoutingModule,
  ],
  declarations: [GuidePage]
})
export class GuideModule {}
