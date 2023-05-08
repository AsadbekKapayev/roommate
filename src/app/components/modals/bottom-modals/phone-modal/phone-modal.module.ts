import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhoneModalComponent} from "./phone-modal.component";

@NgModule({
  declarations: [PhoneModalComponent],
  exports: [PhoneModalComponent],
  entryComponents: [PhoneModalComponent],
  imports: [
    CommonModule,
  ]
})
export class PhoneModalModule {
}
