import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuideTabPage } from './guide-tab.page';

import {ExploreContainerComponentModule} from "../../../explore-container/explore-container.module";
import {GuideTabRoutingModule} from "./guide-tab-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GuideTabRoutingModule,
  ],
  declarations: [GuideTabPage]
})
export class GuideTabModule {}
