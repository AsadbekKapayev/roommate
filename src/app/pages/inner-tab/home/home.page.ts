import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdService} from "../../../services/common/ad.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {ALL_URL} from "../../../shares/url-static";
import {AdType} from "../../../models/commons/ad/AdType";
import {SubSink} from "../../../shares/SubSink";
import {Ad} from "../../../models/commons/ad/Ad";
import {take} from "rxjs";

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

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.initAds();

    // this.rooms = this.adService.loadRooms();
    // this.roommates = this.adService.loadRoommates();

    // this.testController.loadGenders().toPromise().then(x => {
    //   console.log('GsCX6LWF :: ', x)
    // })
  }

  initAds() {
    this.adService.loadRooms().pipe(
      take(1)
    ).subscribe(x => {
      this.rooms = x.data;
    });

    this.adService.loadRoommates().pipe(
      take(1)
    ).subscribe(x => {
      this.roommates = x.data;
    });
  }

  onClickCategory(category: IonicButton) {
    var url = category?.id === AdType.ROOM ? ALL_URL.LOOK_FOR_ROOM :
      category?.id === AdType.ROOMMATE ? ALL_URL.LOOK_FOR_ROOMMATE :
        null;

    if (url) {
      this.navCtrl.navigateForward([url]).then();
    }
  }
}
