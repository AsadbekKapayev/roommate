import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FillProfileModalComponent} from "./fill-profile-modal.component";

@NgModule({
  declarations: [FillProfileModalComponent],
  exports: [FillProfileModalComponent],
  entryComponents: [FillProfileModalComponent],
  imports: [
    CommonModule,
  ]
})
export class FillProfileModalModule {
}
