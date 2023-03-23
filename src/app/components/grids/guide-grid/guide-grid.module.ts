import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {GuideGridComponent} from "./guide-grid.component";


@NgModule({
  declarations: [GuideGridComponent],
  exports: [GuideGridComponent],
  entryComponents: [GuideGridComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class GuideGridModule {
}
