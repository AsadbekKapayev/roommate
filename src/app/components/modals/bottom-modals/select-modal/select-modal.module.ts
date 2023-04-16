import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectModalComponent} from "./select-modal.component";

@NgModule({
  declarations: [SelectModalComponent],
  exports: [SelectModalComponent],
  entryComponents: [SelectModalComponent],
  imports: [
    CommonModule,
  ]
})
export class SelectModalModule {
}
