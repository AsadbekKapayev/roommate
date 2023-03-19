import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber: string = '';
  phoneNumberError: boolean = false;

  constructor(private navCtrl: NavController,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  goToSms() {
    this.loginService.login(this.phoneNumber);
  }

}
