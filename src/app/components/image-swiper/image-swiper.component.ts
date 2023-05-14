import {AfterContentChecked, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Pagination} from "swiper";
import {SwiperComponent} from "swiper/angular";
import {Media} from "../../models/commons/ad/Media";

SwiperCore.use([
  Pagination,
]);

@Component({
  selector: 'app-image-swiper-item',
  templateUrl: './image-swiper.component.html',
  styleUrls: ['./image-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSwiperComponent implements OnInit, AfterContentChecked {

  @Input() imageUrls: Media[];

  @ViewChild('swiper') swiper: SwiperComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

}
