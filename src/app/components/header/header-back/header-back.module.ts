import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {HeaderBackComponent} from "./header-back.component";


@NgModule({
  declarations: [HeaderBackComponent],
  exports: [HeaderBackComponent],
  entryComponents: [HeaderBackComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class HeaderBackModule {
}
