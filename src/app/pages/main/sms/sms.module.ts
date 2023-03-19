import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import {SmsPage} from "./sms.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [SmsPage],
  imports: [
    CommonModule,
    SmsRoutingModule,
    IonicModule,
    ThrottleClickModule,
    FormsModule
  ]
})
export class SmsModule { }
