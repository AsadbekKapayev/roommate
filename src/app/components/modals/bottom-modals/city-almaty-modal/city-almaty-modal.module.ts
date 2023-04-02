import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityAlmatyModalComponent} from "./city-almaty-modal.component";

@NgModule({
  declarations: [CityAlmatyModalComponent],
  exports: [CityAlmatyModalComponent],
  entryComponents: [CityAlmatyModalComponent],
  imports: [
    CommonModule,
  ]
})
export class CityAlmatyModalModule {
}
