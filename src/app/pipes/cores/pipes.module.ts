import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlPipe} from "./safe-html.pipe";
import {PriceCurrencyPipe} from "../PriceCurrency";
import {FormatTimePipe} from "./format-time.pipe";
import {PasswordEyePipe} from "../password-eye.pipe";
import {CustomMessageDatePipe} from "../CustomMessageDatePipe";

@NgModule({
  declarations: [
    SafeHtmlPipe,
    PriceCurrencyPipe,
    FormatTimePipe,
    PasswordEyePipe,
    CustomMessageDatePipe,
  ],
  exports: [
    SafeHtmlPipe,
    PriceCurrencyPipe,
    FormatTimePipe,
    PasswordEyePipe,
    CustomMessageDatePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
