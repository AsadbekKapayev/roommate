import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class GuidePage implements OnInit {

  ads: Ad[];

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickLike(ad: Ad) {
    this.ads = this.ads.filter(x => x.id !== ad.id);
  }

  initAds() {
    this.adService.loadRooms(1).pipe(
      take(1),
      tap(x => {
        x.data?.forEach(y => y.isLiked = true);
      })
    ).subscribe(x => {
      this.ads = x.data;
    });
  }

}
