import {Injectable} from '@angular/core';
import {AdController} from "../../controllers/AdController";
import {Filter} from "../../models/commons/ad/Filter";
import {AdStore} from "../../models/commons/ad/AdStore";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private adController: AdController) {
  }

  loadRooms(id: number) {
    return this.adController.loadRooms(id);
  }

  loadRoomById(id: string) {
    return this.adController.loadRoomById(id);
  }

  loadRoommates(id: number) {
    return this.adController.loadRoommates(id);
  }

  loadRoommateById(id: string) {
    return this.adController.loadRoommateById(id);
  }

  loadByFilter(filter: Filter) {
    return this.adController.loadByFilter(filter);
  }

  adLike(adId: number) {
    return this.adController.adLike(adId);
  }

  adLiked() {
    return this.adController.adLiked();
  }

  userAds() {
    return this.adController.userAds();
  }

  userSearchAds() {
    return this.adController.userSearchAds();
  }

  getAdStore(adStore: AdStore) {
    return this.adController.getAdStore(adStore);
  }

}
