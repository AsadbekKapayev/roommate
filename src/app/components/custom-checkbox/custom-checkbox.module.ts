import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomCheckboxComponent} from "./custom-checkbox.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/cores/pipes.module";
import {ErrorMessageFormModule} from "../error-messge-form/error-message-form.module";
import {NgxMaskModule} from "ngx-mask";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [CustomCheckboxComponent],
  exports: [
    CustomCheckboxComponent
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
export class CustomCheckboxModule {
}
