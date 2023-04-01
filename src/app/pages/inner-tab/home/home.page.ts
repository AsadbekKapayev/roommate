import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {AdItem} from "../../../models/commons/ad/AdItem";
import {AdService} from "../../../services/common/ad.service";
import {IonicButton} from "../../../models/core/IonicButton";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class GuidePage implements OnInit {

  ads: AdItem[];

  categories: IonicButton[] = [
    {
      id: 'look-for-roommate',
      title: 'Ищу сожителя',
    },
    {
      id: 'look-for-room',
      title: 'Сниму комнату',
    },
  ];

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.ads = this.adService.loadAds();
  }

  onClickCategory(category: IonicButton) {

  }
}
