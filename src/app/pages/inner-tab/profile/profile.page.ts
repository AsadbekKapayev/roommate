import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {GuideService} from "../../../services/common/guide.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private guideService: GuideService) {
  }

  ngOnInit() {
  }

}
