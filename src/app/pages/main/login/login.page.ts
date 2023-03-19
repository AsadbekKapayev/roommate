import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber: string = '';
  phoneNumberError: boolean = false;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goToSms() {
    this.navCtrl.navigateForward(ALL_URL.SMS).then();
  }

}
