import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {RoommateItem} from "../../../models/commons/ad/RoommateItem";

@Component({
  selector: 'app-look-for-roommate',
  templateUrl: './look-for-roommate.page.html',
  styleUrls: ['./look-for-roommate.page.scss'],
})
export class LookForRoommatePage implements OnInit {

  title: string;
  roommates: RoommateItem[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.roommates = this.adService.loadRoommates();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
