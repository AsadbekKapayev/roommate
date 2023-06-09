import {Injectable} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ProfileController} from "../../controllers/ProfileController";
import {of, tap} from "rxjs";
import {User} from "../../models/commons/user/User";
import {Item} from "../../models/commons/Item";
import {StorageSecureKeyEnum} from "../../shares/static";
import {StorageService} from "../../storages/storage.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  otpCode: string;
  token: string;

  genders: Item[];

  constructor(private navCtrl: NavController,
              private storage: StorageService,
              private profileController: ProfileController) {
  }

  loadGenders() {

    if (this.genders) {
      return of(this.genders);
    }

    return this.profileController.loadGenders().pipe(
      tap(x => this.genders = x)
    );
  }

  updateProfile(name: string, email: string, genderId: number, phone?: number, photo?: Blob) {
    let profile = JSON.parse(this.storage.get(StorageSecureKeyEnum.PROFILE)) as User;

    if (!profile) {
      profile = {} as User;
    }

    profile.name = name;
    profile.email = email;
    profile.gender_id = genderId;

    if (phone) {
      profile.phone_number = phone;
    }

    return this.profileController.updateProfile(profile, photo).pipe(
      tap(x => this.storage.set(StorageSecureKeyEnum.PROFILE, JSON.stringify(x?.data?.user)))
    );
  }

  loadUser() {
    const profile = JSON.parse(this.storage.get(StorageSecureKeyEnum.PROFILE)) as User;

    if (profile) {
      return of(profile);
    }

    return this.profileController.loadUser()
      .pipe(tap(x => this.storage.set(StorageSecureKeyEnum.PROFILE, JSON.stringify(x))));
  }

  loadNewUser() {
    return this.profileController.loadUser();
  }

}
