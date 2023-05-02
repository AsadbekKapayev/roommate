import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxModalComponent} from "./checkbox-modal.component";
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "../../../header/header.module";
import {CustomCheckboxModule} from "../../../custom-checkbox/custom-checkbox.module";

@NgModule({
  declarations: [CheckboxModalComponent],
  exports: [CheckboxModalComponent],
  entryComponents: [CheckboxModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule,
    CustomCheckboxModule,
  ]
})
export class CheckboxModalModule {
}
