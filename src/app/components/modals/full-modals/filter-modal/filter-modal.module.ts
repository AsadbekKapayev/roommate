import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterModalComponent} from "./filter-modal.component";
import {HeaderModule} from "../../../header/header.module";
import {IonicModule} from "@ionic/angular";
import {CustomModuleModule} from "../../../custom-input/custom-module.module";
import {FilterItemModule} from "../../../filter-item/filter-item.module";
import {CustomCheckboxModule} from "../../../custom-checkbox/custom-checkbox.module";

@NgModule({
  declarations: [FilterModalComponent],
  exports: [FilterModalComponent],
  entryComponents: [FilterModalComponent],
  imports: [
    CommonModule,
    HeaderModule,
    IonicModule,
    CustomModuleModule,
    FilterItemModule,
    CustomCheckboxModule,
  ]
})
export class FilterModalModule { }
