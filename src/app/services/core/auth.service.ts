import {Injectable} from '@angular/core';
import {StorageService} from "../../storages/storage.service";
import {StorageSecureKeyEnum} from "../../shares/static";
import {ALL_URL} from "../../shares/url-static";
import {NavController} from "@ionic/angular";
import {AuthController} from "../../controllers/AuthController";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  otpCode: string;
  token: string;

  constructor(private navCtrl: NavController,
              private authController: AuthController,
              private storage: StorageService) {
  }

  getPhoneNumber(): string {
    return this.storage.get(StorageSecureKeyEnum.PHONE_NUMBER)
  }

  setPhoneNumber(value: string) {
    return this.storage.set(StorageSecureKeyEnum.PHONE_NUMBER, value);
  }

  sendOtpCode(phoneNumber: string) {
    return this.authController.sendOtpCode(phoneNumber);
  }

  verifyOtpCode(code: string) {
    return this.authController.verifyOtpCode(this.getPhoneNumber(), code);
  }

  register(name: string, email: string, gender_id: number, password: string, password_confirmation: string) {
    return this.authController.register(name, email, gender_id, password, password_confirmation);
  }

  loadGenders() {
    return this.authController.loadGenders();
  }

  goToHome() {
    return this.navCtrl.navigateRoot([`${ALL_URL.TAB_HOME}`]);
  }

}
