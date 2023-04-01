import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {AdItem} from "../../../models/commons/ad/AdItem";

@Component({
  selector: 'app-look-for-roommate',
  templateUrl: './look-for-roommate.page.html',
  styleUrls: ['./look-for-roommate.page.scss'],
})
export class LookForRoommatePage implements OnInit {

  title: string;
  ads: AdItem[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.ads = this.adService.loadAds();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
