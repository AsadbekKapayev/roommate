import {Injectable} from '@angular/core';
import {StorageService} from "../../storages/storage.service";
import {StorageSecureKeyEnum} from "../../shares/static";
import {ALL_URL} from "../../shares/url-static";
import {NavController} from "@ionic/angular";
import {AuthController} from "../../controllers/AuthController";
import {ProfileController} from "../../controllers/ProfileController";
import {UserWithToken} from "../../models/commons/user/UserWithToken";
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/commons/user/User";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  otpCode: string;
  token: string;

  profile: User;

  constructor(private navCtrl: NavController,
              private profileController: ProfileController) {
  }

  loadGenders() {
    return this.profileController.loadGenders();
  }

  updateProfile(name: string, email: string, genderId: number, photo: Blob) {
    return this.profileController.updateProfile(name, email, genderId, photo);
  }

  getProfile() {
    if (this.profile) {
      return this.profile;
    }

    this.profile = JSON.parse(localStorage.getItem(StorageSecureKeyEnum.PROFILE));
    return this.profile;
  }

  setProfile(profile: User) {
    this.profile = profile;
    localStorage.setItem(StorageSecureKeyEnum.PROFILE, JSON.stringify(profile));
  }

}
