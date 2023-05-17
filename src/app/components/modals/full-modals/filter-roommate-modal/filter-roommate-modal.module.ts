import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterRoommateModalComponent} from "./filter-roommate-modal.component";
import {HeaderModule} from "../../../header/header.module";
import {IonicModule} from "@ionic/angular";
import {CustomModuleModule} from "../../../custom-input/custom-module.module";
import {FilterItemModule} from "../../../filter-item/filter-item.module";
import {CustomCheckboxModule} from "../../../custom-checkbox/custom-checkbox.module";

@NgModule({
  declarations: [FilterRoommateModalComponent],
  exports: [FilterRoommateModalComponent],
  entryComponents: [FilterRoommateModalComponent],
  imports: [
    CommonModule,
    HeaderModule,
    IonicModule,
    CustomModuleModule,
    FilterItemModule,
    CustomCheckboxModule,
  ]
})
export class FilterRoommateModalModule { }
