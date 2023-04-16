import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {take} from "rxjs";

@Component({
  selector: 'app-look-for-room',
  templateUrl: './look-for-room.page.html',
  styleUrls: ['./look-for-room.page.scss'],
})
export class LookForRoomPage implements OnInit {

  title: string;
  ads: Ad[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  initAds() {
    this.adService.loadRooms().pipe(
      take(1)
    ).subscribe(x => {
      this.ads = x.data;
    });

    // this.adService.loadRoommates().pipe(
    //   take(1)
    // ).subscribe(x => {
    //   this.roommates = x.data;
    // });
  }

}
