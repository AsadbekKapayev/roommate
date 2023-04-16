import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Ads} from "../models/commons/ad/Ads";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AdController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  loadRooms(): Observable<Ads> {
    return this.httpService.get('/ad', {})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

  loadRoommates(): Observable<Ads> {
    return this.httpService.get('/ad_get', {})
      .pipe(map((value) => value.body.data[0] as Ads));
  }

}
