import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdEditModalComponent} from "./ad-edit-modal.component";

@NgModule({
  declarations: [AdEditModalComponent],
  exports: [AdEditModalComponent],
  entryComponents: [AdEditModalComponent],
  imports: [
    CommonModule,
  ]
})
export class AdEditModalModule {
}
