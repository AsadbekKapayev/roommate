import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTabPage } from './home-tab.page';

import {ExploreContainerComponentModule} from "../../../explore-container/explore-container.module";
import {HomeTabRoutingModule} from "./home-tab-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeTabRoutingModule,
  ],
  declarations: [HomeTabPage]
})
export class HomeTabModule {}
