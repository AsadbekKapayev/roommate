import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FillProfileModalComponent} from "./fill-profile-modal.component";

@NgModule({
  declarations: [FillProfileModalComponent],
  exports: [FillProfileModalComponent],
  entryComponents: [FillProfileModalComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class FillProfileModalModule {
}
