import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Ads} from "../models/commons/ad/Ads";
import {Observable} from "rxjs/internal/Observable";
import {Ad} from "../models/commons/ad/Ad";
import {Filter} from "../models/commons/ad/Filter";
import {AdStore} from "../models/commons/ad/AdStore";
import {SearchAdStore} from "../models/commons/ad/SearchAdStore";

@Injectable({
  providedIn: 'root'
})
export class AdController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  loadRooms(id: number): Observable<Ads> {
    return this.httpService.get('/ad', {page: id})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  loadRoomById(id: string): Observable<Ad> {
    return this.httpService.get('/ad/' + id, {})
      .pipe(map((value) => value.body.data[0] as Ad));
  }

  loadRoommates(id: number): Observable<Ads> {
    return this.httpService.get('/ad_get', {page: id})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  loadRoommateById(id: string): Observable<Ad> {
    return this.httpService.get('/ad_get/' + id, {})
      .pipe(map((value) => value.body.data[0] as Ad));
  }

  loadByFilter(filter: Filter): Observable<any> {
    return this.httpService.get('/search/text', {
      price_from: filter?.price_from,
      price_to: filter?.price_to,
    })
      .pipe(map((value) => value.body.data[0] as any));
  }

  adLike(adId: number) {
    return this.httpService.get(`/ad/${adId}/like`, {});
  }

  adLiked(): Observable<Ads> {
    return this.httpService.get('/user/liked', {})
      .pipe(map((value) => value.body.data[0].result as Ads));
  }

  userAds(): Observable<Ads> {
    return this.httpService.get('/user/get_ad', {})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  userSearchAds(): Observable<Ads> {
    return this.httpService.get('/user/search_ad', {})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  getAdStore(adStore: AdStore): Observable<any> {
    return this.httpService.postJson('/user/get_ad/store', {
      city_id: adStore.city_id,
      contact_email: adStore.contact_email,
      contact_name: adStore.contact_name,
      phone_number: adStore.phone_number,
      coordinates: adStore.coordinates,
      description: adStore.description,
      location: adStore.location,
      price: adStore.price,
      price_from: adStore.price_from,
      roommate_count: adStore.roommate_count,
      rooms_count: adStore.rooms_count,
    })
      .pipe(map((value) => value.body as any));
  }

  searchAdStore(searchAdStore: SearchAdStore, files: File[]): Observable<any> {
    return this.httpService.postFiles('/user/search_ad/store', files, {
      city_id: searchAdStore.city_id,
      contact_email: searchAdStore.contact_email,
      contact_name: searchAdStore.contact_name,
      phone_number: searchAdStore.phone_number,
      coordinates: searchAdStore.coordinates,
      description: searchAdStore.description,
      location: searchAdStore.location,
      price: searchAdStore.price,
      price_from: searchAdStore.price_from,
      roommate_count: searchAdStore.roommate_count,
      rooms_count: searchAdStore.rooms_count,
      square_general: searchAdStore.square_general,
    });
  }

}
