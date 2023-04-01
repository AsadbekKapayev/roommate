import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterModalComponent} from "./filter-modal.component";
import {HeaderModule} from "../../../header/header.module";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [FilterModalComponent],
  exports: [FilterModalComponent],
  entryComponents: [FilterModalComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ]
})
export class FilterModalModule { }
