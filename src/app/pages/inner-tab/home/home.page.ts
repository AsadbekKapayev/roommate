import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {GuideService} from "../../../services/common/guide.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class GuidePage implements OnInit {

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private guideService: GuideService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.settingControllerService.setFillProfileModal().present().then();
  }

}
