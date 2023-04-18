import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthService} from "../../../services/core/auth.service";
import {take} from "rxjs";
import {ALL_URL} from "../../../shares/url-static";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneNumber: string = '';
  phoneNumberError: boolean = false;

  constructor(private navCtrl: NavController,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  goToSms() {
    const phone = '7' + this.phoneNumber;

    this.authService.sendOtpCode(phone).pipe(
      take(1)
    ).subscribe(x => {
      this.authService.otpCode = x;
      this.authService.setPhoneNumber(phone);
      this.navCtrl.navigateForward(ALL_URL.SMS).then();
    })
  }

  onClickLoginEmail() {
    this.navCtrl.navigateForward(ALL_URL.LOGIN_EMAIL).then();
  }

  onClickRegister() {
    this.navCtrl.navigateForward(ALL_URL.REGISTER).then();
  }

}
