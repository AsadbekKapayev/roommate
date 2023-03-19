import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomInputComponent} from "./custom-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/cores/pipes.module";
import {ErrorMessageFormModule} from "../error-messge-form/error-message-form.module";
import {NgxMaskModule} from "ngx-mask";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [CustomInputComponent],
  exports: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ErrorMessageFormModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
  ],
})
export class CustomModuleModule {
}
