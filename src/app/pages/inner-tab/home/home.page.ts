import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRefresher, NavController} from "@ionic/angular";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdService} from "../../../services/common/ad.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {ALL_URL} from "../../../shares/url-static";
import {AdType} from "../../../models/commons/ad/AdType";
import {SubSink} from "../../../shares/SubSink";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {isEmpty} from "../../../shares/cores/util-method";
import {AuthService} from "../../../services/core/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class GuidePage implements OnInit {

  subSink = new SubSink();

  rooms: Ad[];
  roommates: Ad[];

  categories: IonicButton[] = [
    {
      id: AdType.ROOMMATE,
      title: 'Ищу сожителя',
    },
    {
      id: AdType.ROOM,
      title: 'Сниму комнату',
    },
  ];

  @ViewChild('ionRefresher') ionRefresher: IonRefresher;

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private authService: AuthService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    if (!this.authService.getCity()) {
      this.settingControllerService.setCityModal().present().then(x => {
        if (!x?.data || isEmpty(x?.data)) {
          return;
        }

        this.authService.setCity(x?.data);
      });
    }

    this.initAds();

    // this.rooms = this.adService.loadRooms();
    // this.roommates = this.adService.loadRoommates();

    // this.testController.loadGenders().toPromise().then(x => {
    //   console.log('GsCX6LWF :: ', x)
    // })
  }

  initAds() {
    this.subSink.sink = forkJoin([
      this.adService.loadRooms(1),
      this.adService.loadRoommates(1)
    ]).pipe(
      take(1),
    ).subscribe(x => {
      this.rooms = x[0]?.data;
      this.roommates = x[1]?.data;
    });

    this.ionRefresher?.complete().then();
  }

  onClickCategory(category: IonicButton) {
    const url = category?.id === AdType.ROOM ? ALL_URL.LOOK_FOR_ROOM :
      category?.id === AdType.ROOMMATE ? ALL_URL.LOOK_FOR_ROOMMATE :
        null;

    if (url) {
      this.navCtrl.navigateForward([url]).then();
    }
  }

  showMoreRooms() {
    this.navCtrl.navigateForward([ALL_URL.LOOK_FOR_ROOM]).then();
  }

  showMoreRoommates() {
    this.navCtrl.navigateForward([ALL_URL.LOOK_FOR_ROOMMATE]).then();
  }

}
