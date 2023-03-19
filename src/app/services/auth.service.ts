import {Injectable} from '@angular/core';
import {StorageService} from "../storages/storage.service";
import {StorageSecureKeyEnum} from "../shares/static";
import {ALL_URL} from "../shares/url-static";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private navCtrl: NavController,
              private storage: StorageService) {
  }

  getPhoneNumber(): string {
    return this.storage.get(StorageSecureKeyEnum.PHONE_NUMBER)
  }

  setPhoneNumber(value: string) {
    return this.storage.set(StorageSecureKeyEnum.PHONE_NUMBER, value);
  }

  goToHome() {
    return this.navCtrl.navigateRoot([`${ALL_URL.TAB_HOME}`]);
  }

}
