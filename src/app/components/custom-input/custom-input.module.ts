import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomInputComponent} from "./custom-input.component";
import {NgxMaskModule} from 'ngx-mask';
import {ErrorMessageFormModule} from "../error-messge-form/error-message-form.module";
import {PipesModule} from "../../pipes/core/pipes.module";

@NgModule({
  declarations: [CustomInputComponent],
  exports: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
    ReactiveFormsModule,
    ErrorMessageFormModule,
    PipesModule
  ],
  providers: [FormGroupDirective]
})
export class CustomInputModule {
}
