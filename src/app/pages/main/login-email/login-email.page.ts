import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthService} from "../../../services/core/auth.service";
import {ToastService} from "../../../services/core/toast.service";
import {TokenService} from "../../../services/common/token.service";
import {take} from "rxjs";
import {ALL_URL} from "../../../shares/url-static";
import {ProfileService} from "../../../services/core/profile.service";

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {

  email: string;
  isEmailValid: boolean = true;

  password: string;
  isPasswordValid: boolean = true;

  constructor(private navCtrl: NavController,
              private authService: AuthService,
              private tokenService: TokenService,
              private profileService: ProfileService,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  onChangePassword(pass: string) {
    this.isPasswordValid = pass?.length >= 8;
    this.password = pass;
  }

  onChangeEmail(email: string) {
    const regExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$');
    this.isEmailValid = regExp.test(email);
    this.email = email;
  }

  login() {
    this.authService.loginEmail(this.email, this.password).pipe(
      take(1)
    ).subscribe(
      x => {
        this.tokenService.setToken(x?.token);
        this.navCtrl.navigateForward(ALL_URL.TAB_HOME).then();
      },
      e => {
        if (e?.status === 422) {
          this.toastService.present('Такой пользователь уже существует!').then();
        }
      }
    )

  }

  onClickLoginEmail() {
    this.navCtrl.navigateForward(ALL_URL.LOGIN).then();
  }

  onClickRegister() {
    this.navCtrl.navigateForward(ALL_URL.REGISTER).then();
  }

}
