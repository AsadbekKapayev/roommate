import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRefresher, NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {filter, interval, switchMap, take} from "rxjs";
import {ToastService} from "../../../services/core/toast.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {AdType} from "../../../models/commons/ad/AdType";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class GuidePage implements OnInit {

  ads: Ad[];
  selectedCategory: string = AdType.ROOMMATE;

  categories: IonicButton[] = [
    {
      id: AdType.ROOMMATE,
      title: 'Ищу сожителя',
      selected: true,
    },
    {
      id: AdType.ROOM,
      title: 'Сниму комнату',
    },
  ];

  @ViewChild('ionRefresher') ionRefresher: IonRefresher;

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
    const delayTime = 2000;
    let resetClicked = false;

    this.toastService.presentButton('Объявление удалено из избранных', () => {
      resetClicked = true;
      ad.user_liked = true;
    }, delayTime).then();

    interval(delayTime).pipe(
      take(1),
      filter(() => !resetClicked),
      switchMap(() => this.adService.adLike(ad.id)),
    ).subscribe(x => {
      this.ads = this.ads.filter(x => x.id !== ad.id);
    });

  }

  initAds() {
    this.adService.adLiked().pipe(
      take(1),
    ).subscribe(x => {
      this.ads = x.data;
    });

    this.ionRefresher?.complete().then();
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });

    this.selectedCategory = category.id;
  }

}
