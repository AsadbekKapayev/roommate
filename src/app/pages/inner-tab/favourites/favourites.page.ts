import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class GuidePage implements OnInit {

  ads: RoomItem[];

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.ads = this.adService.loadRoomsFavourites();
  }

  onClickLike(ad: RoomItem) {
    this.ads = this.ads.filter(x => x.id !== ad.id);
  }
}
