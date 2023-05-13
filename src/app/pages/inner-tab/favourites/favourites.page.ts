import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {take} from "rxjs";
import {ToastService} from "../../../services/core/toast.service";

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
              private toastService: ToastService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickLike(ad: Ad) {
    this.ads = this.ads.filter(x => x.id !== ad.id);

    this.adService.adLike(ad.id).pipe(
      take(1),
    ).subscribe();

    this.toastService.presentButton('Объявление удалено из избранных', () => {
      ad.user_liked = true;
      this.ads.push(ad);
      this.adService.adLike(ad.id).pipe(
        take(1),
      ).subscribe();
      return true;
    }, 2000).then();
  }

  initAds() {
    this.adService.adLiked().pipe(
      take(1),
    ).subscribe(x => {
      console.log('EgCUZPtQ :: ', x)
      this.ads = x.data;
    });
  }

}
