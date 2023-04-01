import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterModalComponent} from "./filter-modal.component";
import {HeaderModule} from "../../../header/header.module";
import {IonicModule} from "@ionic/angular";
import {CustomModuleModule} from "../../../custom-input/custom-module.module";

@NgModule({
  declarations: [FilterModalComponent],
  exports: [FilterModalComponent],
  entryComponents: [FilterModalComponent],
  imports: [
    CommonModule,
    HeaderModule,
    IonicModule,
    CustomModuleModule,
  ]
})
export class FilterModalModule { }
