import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import {SmsPage} from "./sms.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {PipesModule} from "../../../pipes/cores/pipes.module";
import {HeaderBackModule} from "../../../components/header/header-back/header-back.module";


@NgModule({
  declarations: [SmsPage],
  imports: [
    CommonModule,
    SmsRoutingModule,
    IonicModule,
    ThrottleClickModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    PipesModule,
    HeaderBackModule,
  ]
})
export class SmsModule { }
