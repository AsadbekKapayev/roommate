import {Injectable} from '@angular/core';
import {StorageService} from "../../storages/storage.service";
import {StorageSecureKeyEnum} from "../../shares/static";
import {ALL_URL} from "../../shares/url-static";
import {NavController} from "@ionic/angular";
import {AuthController} from "../../controllers/AuthController";
import {ProfileController} from "../../controllers/ProfileController";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  otpCode: string;
  token: string;

  constructor(private navCtrl: NavController,
              private profileController: ProfileController) {
  }

  loadGenders() {
    return this.profileController.loadGenders();
  }

  updateProfile(name: string, email: string, genderId: number, photo: Blob) {
    return this.profileController.updateProfile(name, email, genderId, photo);
  }

}
