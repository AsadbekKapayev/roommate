import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {RoommateGridComponent} from "./roommate-grid.component";
import {PipesModule} from "../../../pipes/cores/pipes.module";


@NgModule({
  declarations: [RoommateGridComponent],
  exports: [RoommateGridComponent],
  entryComponents: [RoommateGridComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class RoommateGridModule {
}
