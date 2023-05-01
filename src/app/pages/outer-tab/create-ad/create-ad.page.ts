import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";

import ymaps from 'ymaps';
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  styleUrls: ['./create-ad.page.scss'],
})
export class CreateAdPage implements OnInit {

  selectedRoomQuantity: string;
  roomsQuantity: string[] = [
    '1', '2', '3', '4', '5+'
  ];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    // todo should I use ymap.ready()
    this.loadMap().then();
  }

  async loadMap() {
    const app = document.getElementById("map");
    const maps = await ymaps.load();
    const mapContainer = document.createElement("div");
    mapContainer.style.height = "200px";
    mapContainer.style.width = "100%";
    app.appendChild(mapContainer);
    const map = new maps.Map(mapContainer, {
      center: [55.76, 37.64],
      zoom: 11
    }, {
      searchControlProvider: 'yandex#search'
    });
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  onClickSave() {
    this.navCtrl.back();
  }

  onClick(title: string, code: string) {
    this.settingControllerService.setSelectModal(title, code).presentSecondary().then();
    console.log('V7T12Gdl :: ')
  }

}
