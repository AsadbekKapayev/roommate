import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  styleUrls: ['./create-ad.page.scss'],
})
export class CreateAdPage implements OnInit {

  selectedRoomQuantity: string;
  roomsQuantity: string[] = [
    '1', '2', '3', '4', '5+'
  ]

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  onClickSave() {
    this.navCtrl.back();
  }
}
