import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomInputComponent} from "./custom-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomModuleModule {
}
