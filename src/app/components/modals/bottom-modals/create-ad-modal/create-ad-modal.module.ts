import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAdModalComponent} from "./create-ad-modal.component";

@NgModule({
  declarations: [CreateAdModalComponent],
  exports: [CreateAdModalComponent],
  entryComponents: [CreateAdModalComponent],
  imports: [
    CommonModule,
  ]
})
export class CreateAdModalModule {
}
