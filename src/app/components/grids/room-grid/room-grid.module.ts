import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {RoomGridComponent} from "./room-grid.component";
import {PipesModule} from "../../../pipes/cores/pipes.module";


@NgModule({
  declarations: [RoomGridComponent],
  exports: [RoomGridComponent],
  entryComponents: [RoomGridComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class RoomGridModule {
}
