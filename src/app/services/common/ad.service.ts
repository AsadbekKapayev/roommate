import {Injectable} from '@angular/core';
import {AdController} from "../../controllers/AdController";
import {Filter} from "../../models/commons/ad/Filter";
import {AdStore} from "../../models/commons/ad/AdStore";
import {SearchAdStore} from "../../models/commons/ad/SearchAdStore";

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

  loadGetAdByFilter(filter: Filter) {
    return this.adController.loadGetAdByFilter(filter);
  }

  adLike(adId: number) {
    return this.adController.adLike(adId);
  }

  adGetLike(adId: number) {
    return this.adController.adGetLike(adId);
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

  userAdById(id: string) {
    return this.adController.userAdById(id);
  }

  userSearchAdById(id: string) {
    return this.adController.userSearchAdById(id);
  }

  deleteSearchAd(adId: number) {
    return this.adController.deleteSearchAd(adId);
  }

  deleteAd(adId: number) {
    return this.adController.deleteAd(adId);
  }

  getAdStore(adStore: AdStore) {
    return this.adController.getAdStore(adStore);
  }

  getAdUpdate(adStore: AdStore) {
    return this.adController.getAdUpdate(adStore);
  }

  searchAdStore(searchAdStore: SearchAdStore, files: File[]) {
    return this.adController.searchAdStore(searchAdStore, files);
  }

  searchAdUpdate(searchAdStore: SearchAdStore, files: File[]) {
    return this.adController.searchAdUpdate(searchAdStore, files);
  }

}
