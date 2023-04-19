import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageSwiperComponent} from "./image-swiper.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/cores/pipes.module";
import {ErrorMessageFormModule} from "../error-messge-form/error-message-form.module";
import {NgxMaskModule} from "ngx-mask";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [ImageSwiperComponent],
  exports: [
    ImageSwiperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ErrorMessageFormModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
    SwiperModule,
  ],
})
export class ImageSwiperModule {
}
