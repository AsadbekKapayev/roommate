import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageFormComponent} from "./error-message-form.component";

@NgModule({
  declarations: [ErrorMessageFormComponent],
  exports: [ErrorMessageFormComponent],
  entryComponents: [ErrorMessageFormComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorMessageFormModule {
}
