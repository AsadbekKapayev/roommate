import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {GuideItem} from "../../../models/commons/GuideItem";
import {ALL_URL} from "../../../shares/url-static";
import {AdItem} from "../../../models/commons/ad/AdItem";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-ad-grid',
  templateUrl: './ad-grid.component.html',
  styleUrls: ['./ad-grid.component.scss'],
})
export class AdGridComponent implements OnInit {

  @Input() ads: AdItem[];

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickAd(ad: AdItem) {
    this.navCtrl.navigateForward(ALL_URL.AD_DETAIL + ad.id).then();
  }

  onClickLike(ad: AdItem) {
    this.ads.find(x => x.id === ad.id).isLiked = !ad.isLiked;
  }
}
