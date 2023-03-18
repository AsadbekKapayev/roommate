import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThrottleClickDirective} from "./throttle-click.directive";

@NgModule({
  declarations: [ThrottleClickDirective],
  exports: [ThrottleClickDirective],
  imports: [
    CommonModule
  ]
})
export class ThrottleClickModule {
}
