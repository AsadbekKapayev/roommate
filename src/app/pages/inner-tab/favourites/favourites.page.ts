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

  rooms: Ad[];
  roommates: Ad[];

  selectedCategory: string = AdType.ROOMMATE;
  adType = AdType;

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

  onClickLike(ad: Ad, adType: AdType) {
    const delayTime = 2000;
    let resetClicked = false;
    let ad$;

    if (adType === AdType.ROOM) {
      this.rooms = this.rooms.filter(x => x.id !== ad.id);
      ad$ = this.adService.adLike(ad.id);
    }
    if (adType === AdType.ROOMMATE) {
      this.roommates = this.roommates.filter(x => x.id !== ad.id);
      ad$ = this.adService.adGetLike(ad.id);
    }

    this.toastService.presentButton('Объявление удалено из избранных', () => {
      resetClicked = true;
      ad.user_liked = true;

      if (adType === AdType.ROOM) {
        this.rooms.push(ad);
      }

      if (adType === AdType.ROOMMATE) {
        this.roommates.push(ad);
      }
    }, delayTime).then();

    interval(delayTime).pipe(
      take(1),
      filter(() => !resetClicked),
      switchMap(() => ad$),
    ).subscribe();

  }

  initAds() {
    this.adService.adLiked().pipe(
      take(1),
    ).subscribe(x => {
      const ads = x.data;
      this.rooms = ads.filter(ad => ad.model === 'App\\Models\\Ad')
      this.roommates = ads.filter(ad => ad.model === 'App\\Models\\AdGet')
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
