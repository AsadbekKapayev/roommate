import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ALL_URL} from "../../../shares/url-static";
import {NavController} from "@ionic/angular";
import {ToastService} from "../../../services/core/toast.service";
import {AuthService} from "../../../services/core/auth.service";
import {take, timer} from "rxjs";
import {map} from "rxjs/operators";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {TokenService} from "../../../services/common/token.service";
import {ProfileService} from "../../../services/core/profile.service";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.pages.scss'],
})
export class SmsPage implements OnInit {

  phoneNumber = '';

  one: string;
  two: string;
  three: string;
  four: string;

  remainingTime$ = this.createTimer();
  time: Date = new Date();
  limitSeconds = 120;
  retryCodeAvailable: boolean = false;

  @ViewChildren('input') listInput: QueryList<any>;

  constructor(private navCtrl: NavController,
              private toastService: ToastService,
              private authService: AuthService,
              private tokenService: TokenService,
              private profileService: ProfileService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    console.log('W5nh1QR6 :: code :: ', this.authService.otpCode)
    this.phoneNumber = this.authService.getPhoneNumber();
  }

  changeNumber() {
    this.navCtrl.navigateBack(ALL_URL.LOGIN).then();
  }

  moveFocus(event, index: number) {
    if (event.target.value.length < 1) {
      if (index !== 0) {
        this.listInput.get(index - 1).nativeElement.focus();
      }
    } else if (event.target.value.length > 0) {
      if (index === 3) {
        this.smsConfirmation().then();
      } else {
        this.listInput.get(index + 1).nativeElement.focus();
      }
    } else {
      return 0;
    }
  }

  async smsConfirmation() {
    const smsCode = this.one + this.two + this.three + this.four;

    if (!smsCode?.length || smsCode.length !== 4) {
      await this.toastService.present('Неправильно заполнили поле SMS');
      return;
    }

    this.authService.verifyOtpCode(smsCode).pipe(
      take(1)
    ).subscribe(
      res => {
        this.profileService.setProfile(res?.user);

        this.settingControllerService.setFillProfileModal().present().then(x => {
          if (x?.data) {
            this.navCtrl.navigateRoot(ALL_URL.TAB_PROFILE).then(() => {
              this.settingControllerService.setSettingModal().present().then();
            });
          }

          this.navCtrl.navigateRoot(ALL_URL.TAB_HOME).then();
        });

        this.tokenService.setToken(res.token);
      },
      error => this.toastService.present('Неправильно заполнили поле SMS')
    );

  }

  createTimer() {
    this.retryCodeAvailable = false;
    return timer(0, 1000).pipe(map(value => {
      const t1: Date = new Date();
      const dif = Math.floor((t1.getTime() - this.time.getTime()) / 1000);
      const time = this.limitSeconds - dif;
      if (time <= 0) {
        this.retryCodeAvailable = true;
        return 0;
      }
      return time;
    }));
  }

  sendSmsCodeAgain() {
    this.resetSmsCode();
    this.toastService.present('Код отправлен повторно').then(() => {
      this.time = new Date();
    });
  }

  resetSmsCode() {
    this.one = null;
    this.two = null;
    this.three = null;
    this.four = null;
  }

}
