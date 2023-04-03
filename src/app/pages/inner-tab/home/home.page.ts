import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {ALL_URL} from "../../../shares/url-static";
import {AdType} from "../../../models/commons/ad/AdType";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class GuidePage implements OnInit {

  ads: RoomItem[];

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
              private loginService: LoginService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.ads = this.adService.loadRooms();
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
