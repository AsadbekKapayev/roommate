import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouritesPage } from './favourites.page';

import {ExploreContainerComponentModule} from "../../../explore-container/explore-container.module";
import {FavouritesRoutingModule} from "./favourites-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FavouritesRoutingModule,
  ],
  declarations: [FavouritesPage]
})
export class FavouritesModule {}
