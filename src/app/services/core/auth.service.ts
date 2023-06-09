import {Injectable} from '@angular/core';
import {StorageService} from "../../storages/storage.service";
import {StorageSecureKeyEnum} from "../../shares/static";
import {ALL_URL} from "../../shares/url-static";
import {NavController} from "@ionic/angular";
import {AuthController} from "../../controllers/AuthController";
import {TokenService} from "../common/token.service";
import {Item} from "../../models/commons/Item";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  otpCode: string;
  token: string;
  city: Item;

  constructor(private navCtrl: NavController,
              private authController: AuthController,
              private tokenService: TokenService,
              private storage: StorageService) {
  }

  getPhoneNumber(): string {
    return this.storage.get(StorageSecureKeyEnum.PHONE_NUMBER)
  }

  setPhoneNumber(value: string) {
    return this.storage.set(StorageSecureKeyEnum.PHONE_NUMBER, value);
  }

  getCity(): Item {
    return JSON.parse(this.storage.get(StorageSecureKeyEnum.CITY));
  }

  setCity(city: Item) {
    this.storage.set(StorageSecureKeyEnum.CITY, JSON.stringify(city));
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

  loginEmail(email: string, password: string) {
    return this.authController.loginEmail(email, password);
  }

  logout() {
    return this.authController.logout();
  }

  emailVerification() {
    return this.authController.emailVerification();
  }

  goToHome() {
    return this.navCtrl.navigateRoot([`${ALL_URL.TAB_HOME}`]);
  }

  hasSession(): boolean {
    return !!this.tokenService.token;
  }

  hasTempSession(): boolean {
    return !!this.tokenService.tempToken;
  }

  getSession(): string {
    return this.tokenService.token;
  }

  getTempSession(): string {
    return this.tokenService.tempToken;
  }

}
