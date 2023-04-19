import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthService} from "../../../services/core/auth.service";
import {take} from "rxjs";
import {Item} from "../../../models/commons/Item";
import {ToastService} from "../../../services/core/toast.service";
import {TokenService} from "../../../services/common/token.service";
import {ALL_URL} from "../../../shares/url-static";
import {ProfileService} from "../../../services/core/profile.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;

  email: string;
  isEmailValid: boolean = true;

  password: string;
  isPasswordValid: boolean = true;

  passwordRepeat: string;
  isPasswordEqual: boolean = true;

  selectedGender: Item;
  genders: Item[];

  constructor(private navCtrl: NavController,
              private authService: AuthService,
              private tokenService: TokenService,
              private profileService: ProfileService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.profileService.loadGenders().pipe(
      take(1)
    ).subscribe(x => {
      this.genders = x;
      this.selectedGender = x[0];
    })
  }

  onChangeEmail(email: string) {
    const regExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    this.isEmailValid = regExp.test(email);
    this.email = email;
  }

  onChangePassword(pass: string) {
    this.isPasswordValid = pass?.length >= 8;
    this.password = pass;
  }

  checkPasswordEqual(pass: any) {
    this.isPasswordEqual = this.password === pass;
    this.passwordRepeat = pass;
  }

  onClickGender(gender: Item) {
    this.selectedGender = gender;
  }

  register() {
    this.authService.register(this.name, this.email, this.selectedGender?.id, this.password, this.passwordRepeat).pipe(
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
    this.navCtrl.navigateForward(ALL_URL.LOGIN_EMAIL).then();
  }

  onClickLogin() {
    this.navCtrl.navigateForward(ALL_URL.LOGIN).then();
  }

}
