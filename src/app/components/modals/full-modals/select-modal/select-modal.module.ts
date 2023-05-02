import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectModalComponent} from "./select-modal.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../../header/header.module";

@NgModule({
  declarations: [SelectModalComponent],
  exports: [SelectModalComponent],
  entryComponents: [SelectModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule,
  ]
})
export class SelectModalModule {
}
