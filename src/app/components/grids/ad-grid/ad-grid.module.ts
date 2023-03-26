import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {AdGridComponent} from "./ad-grid.component";
import {PipesModule} from "../../../pipes/cores/pipes.module";


@NgModule({
  declarations: [AdGridComponent],
  exports: [AdGridComponent],
  entryComponents: [AdGridComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class AdGridModule {
}
