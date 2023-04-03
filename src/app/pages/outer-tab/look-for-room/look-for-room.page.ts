import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";

@Component({
  selector: 'app-look-for-room',
  templateUrl: './look-for-room.page.html',
  styleUrls: ['./look-for-room.page.scss'],
})
export class LookForRoomPage implements OnInit {

  title: string;
  ads: RoomItem[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.ads = this.adService.loadRooms();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
