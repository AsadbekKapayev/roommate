import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRefresher, NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {AdType} from "../../../models/commons/ad/AdType";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {SubSink} from "../../../shares/SubSink";
import {ProfileService} from "../../../services/core/profile.service";
import {User} from "../../../models/commons/user/User";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  rooms: Ad[];
  roommates: Ad[];
  user: User;

  adType = AdType;
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

  subSink = new SubSink();

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private profileService: ProfileService,
              private settingControllerService: SettingControllerService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAds();

    this.profileService.loadUser().pipe(
      take(1)
    ).subscribe(x => {
      this.user = x;
    })
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });

    this.selectedCategory = category.id;
  }

  initAds() {
    this.subSink.sink = forkJoin([
      this.adService.userAds(),
      this.adService.userSearchAds()
    ]).pipe(
      take(1)
    ).subscribe(x => {
      this.rooms = x[1].data;
      this.roommates = x[0].data;
    });

    this.ionRefresher?.complete().then();
  }

  onEditClicked(ad: Ad, adType: AdType) {
    this.settingControllerService.setAdEditModal(ad?.id, adType).present().then(() => {
      this.initAds();
    });
  }

}
