import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginEmailRoutingModule} from './login-email-routing.module';
import {LoginEmailPage} from "./login-email.page";
import {IonicModule} from "@ionic/angular";
import {ThrottleClickModule} from "../../../directives/cores/throttle-click/throttle-click.module";
import {MatInputModule} from "@angular/material/input";
import {CustomModuleModule} from "../../../components/custom-input/custom-module.module";
import {HeaderModule} from "../../../components/header/header.module";
import {CustomCheckboxModule} from "../../../components/custom-checkbox/custom-checkbox.module";

@NgModule({
  declarations: [LoginEmailPage],
  imports: [
    CommonModule,
    LoginEmailRoutingModule,
    IonicModule,
    ThrottleClickModule,
    MatInputModule,
    CustomModuleModule,
    HeaderModule,
    CustomCheckboxModule
  ]
})
export class LoginEmailModule {
}
