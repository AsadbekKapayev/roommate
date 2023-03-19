import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlPipe} from "./safe-html.pipe";
import {PriceCurrencyPipe} from "../PriceCurrency";
import {CustomDatePipe} from "../CustomDatePipe";
import {FormatTimePipe} from "./format-time.pipe";
import {PasswordEyePipe} from "../password-eye.pipe";
import {CustomMessageDatePipe} from "../CustomMessageDatePipe";
import {PhoneNumberPipe} from "../phone-number.pipe";

@NgModule({
  declarations: [
    SafeHtmlPipe,
    CustomDatePipe,
    PriceCurrencyPipe,
    FormatTimePipe,
    PasswordEyePipe,
    CustomMessageDatePipe,
    PhoneNumberPipe
  ],
  exports: [
    SafeHtmlPipe,
    PriceCurrencyPipe,
    CustomDatePipe,
    FormatTimePipe,
    PasswordEyePipe,
    CustomMessageDatePipe,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
