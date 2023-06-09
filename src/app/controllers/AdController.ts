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
import {tap} from "rxjs";

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
    return this.httpService.get('/search/' + filter.search_text, {
      city_id: filter?.city_id,
      price_from: filter?.price_from,
      price_to: filter?.price_to,
      rooms_count: filter?.rooms_count,
      roommate_count: filter?.roommate_count,
      bathrooms_count: filter?.bathrooms_count,
      balconies_count: filter?.balconies_count,
      loggias_count: filter?.loggias_count,
      floor: filter?.floor,
      floor_from: filter?.floor_from,
      square_general: filter?.square_general,
      square_kitchen: filter?.square_kitchen,
      square_living: filter?.square_living,
      ad_gender_type_id: filter?.ad_gender_type_id,
      category: 'search_ad',
    })
      .pipe(map((value) => value.body.data[0] as any));
  }

  loadGetAdByFilter(filter: Filter): Observable<any> {
    return this.httpService.get('/search/' + filter.search_text, {
      city_id: filter?.city_id,
      price_from: filter?.price_from,
      price_to: filter?.price_to,
      rooms_count: filter?.rooms_count,
      roommate_count: filter?.roommate_count,
      bathrooms_count: filter?.bathrooms_count,
      balconies_count: filter?.balconies_count,
      loggias_count: filter?.loggias_count,
      floor: filter?.floor,
      floor_from: filter?.floor_from,
      square_general: filter?.square_general,
      square_kitchen: filter?.square_kitchen,
      square_living: filter?.square_living,
      ad_gender_type_id: filter?.ad_gender_type_id,
      category: 'get_ad',
    })
      .pipe(map((value) => value.body.data[0] as any));
  }

  adLike(adId: number) {
    return this.httpService.get(`/ad/${adId}/like`, {});
  }

  adGetLike(adId: number) {
    return this.httpService.get(`/get_ad/${adId}/like`, {});
  }

  adLiked(): Observable<Ads> {
    return this.httpService.get('/user/liked', {})
      .pipe(map((value) => value.body.data[0].result as Ads));
  }

  userAds(): Observable<Ads> {
    return this.httpService.get('/user/get_ad', {})
      .pipe(map((value) => value.body.data[0] as Ads),
        tap((x) => console.log(x)));
  }

  userSearchAds(): Observable<Ads> {
    return this.httpService.get('/user/search_ad', {})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  userAdById(id: string): Observable<Ad> {
    return this.httpService.get('/user/get_ad/' + id + '/edit', {})
      .pipe(map((value) => value.body.data[0] as Ad));
  }

  userSearchAdById(id: string): Observable<Ad> {
    return this.httpService.get('/user/search_ad/' + id + '/edit', {})
      .pipe(map((value) => value.body.data[0] as Ad));
  }

  getAdUpdate(adStore: AdStore): Observable<any> {
    return this.httpService.postJson('/user/get_ad/' + adStore.adId + '/update', {
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

  deleteSearchAd(adId: number): Observable<any> {
    return this.httpService.postJson('/user/search_ad/' + adId + '/delete', {})
      .pipe(map((value) => value.body as any));
  }

  deleteAd(adId: number): Observable<any> {
    return this.httpService.postJson('/user/get_ad/' + adId + '/delete', {})
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
      price_com: searchAdStore.price_com,
      price_pledge: searchAdStore.price_pledge,
      floor: searchAdStore.floor,
      floor_from: searchAdStore.floor_from,
      price_from: searchAdStore.price_from,
      roommate_count: searchAdStore.roommate_count,
      rooms_count: searchAdStore.rooms_count,
      square_general: searchAdStore.square_general,
      square_kitchen: searchAdStore.square_kitchen,
      square_living: searchAdStore.square_living,
      apartment_condition_id: searchAdStore.apartment_condition_id,
      ad_gender_type_id: searchAdStore.gender_type,
      'apartmentFurniture_ids[]': searchAdStore.apartmentFurniture,
      apartment_furniture_status_id: searchAdStore.apartmentFurnitureStatus,
      'apartmentFacilities_ids[]': searchAdStore.apartmentFacilities_ids,
      'apartmentBathroomTypes_ids[]': searchAdStore.apartmentBathroomTypes_ids,
      'apartmentSecurities_ids[]': searchAdStore.apartmentSecurities_ids,
      bathrooms_count: searchAdStore.bathroom_count,
      'apartmentBathrooms_ids[]': searchAdStore.apartmentBathrooms_ids,
      balconies_count: searchAdStore.balconies_count,
      'windowDirections[]': searchAdStore.windowDirections,
      'apartmentFor_ids[]': searchAdStore.apartmentFor_ids,
      loggias_count: searchAdStore.loggias_count,
    });
  }

  searchAdUpdate(searchAdStore: SearchAdStore, files: File[]): Observable<any> {
    return this.httpService.postFiles('/user/search_ad/' + searchAdStore.adId + '/update', files, {
      city_id: searchAdStore.city_id,
      contact_email: searchAdStore.contact_email,
      contact_name: searchAdStore.contact_name,
      phone_number: searchAdStore.phone_number,
      coordinates: searchAdStore.coordinates,
      description: searchAdStore.description,
      location: searchAdStore.location,
      price: searchAdStore.price,
      price_com: searchAdStore.price_com,
      price_pledge: searchAdStore.price_pledge,
      floor: searchAdStore.floor,
      floor_from: searchAdStore.floor_from,
      price_from: searchAdStore.price_from,
      roommate_count: searchAdStore.roommate_count,
      rooms_count: searchAdStore.rooms_count,
      square_general: searchAdStore.square_general,
      square_kitchen: searchAdStore.square_kitchen,
      square_living: searchAdStore.square_living,
      apartment_condition_id: searchAdStore.apartment_condition_id,
      ad_gender_type_id: searchAdStore.gender_type,
      'apartmentFurniture_ids[]': searchAdStore.apartmentFurniture,
      apartment_furniture_status_id: searchAdStore.apartmentFurnitureStatus,
      'apartmentFacilities_ids[]': searchAdStore.apartmentFacilities_ids,
      'apartmentBathroomTypes_ids[]': searchAdStore.apartmentBathroomTypes_ids,
      'apartmentSecurities_ids[]': searchAdStore.apartmentSecurities_ids,
      bathrooms_count: searchAdStore.bathroom_count,
      'apartmentBathrooms_ids[]': searchAdStore.apartmentBathrooms_ids,
      balconies_count: searchAdStore.balconies_count,
      'windowDirections[]': searchAdStore.windowDirections,
      'apartmentFor_ids[]': searchAdStore.apartmentFor_ids,
      loggias_count: searchAdStore.loggias_count,
    });
  }

}
