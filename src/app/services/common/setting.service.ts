import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {RoomItem} from "../../models/commons/ad/RoomItem";
import {ProfileSetting} from "../../models/commons/ProfileSetting";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private profileSetting: ProfileSetting;

  constructor() {
  }

  getProfileSetting() {
    return this.profileSetting;
  }

  setProfileSetting(profileSetting: ProfileSetting) {
    this.profileSetting = profileSetting;
  }

}
