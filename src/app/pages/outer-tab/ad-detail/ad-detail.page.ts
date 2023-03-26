import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {GuideService} from "../../../services/common/guide.service";
import {AdItem} from "../../../models/commons/ad/AdItem";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.page.html',
  styleUrls: ['./ad-detail.page.scss'],
})
export class AdDetailPage implements OnInit {

  ad: AdItem;
  ads: AdItem[];

  utilChips: string[] = ['Мебель', 'Балкон', 'Газ', 'Интернет'] // todo
  chips2: string[] = ['Можно держать животных', 'Можно курить']; // todo

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAdDetail();

  }

  initAdDetail() {
    const adId = this.route.snapshot?.params?.id;

    this.ad = this.adService.loadAdById(adId);
    this.ads = this.adService.loadAdsOther(adId);
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
