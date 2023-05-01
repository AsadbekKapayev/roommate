import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Ads} from "../models/commons/ad/Ads";
import {Observable} from "rxjs/internal/Observable";
import {Ad} from "../models/commons/ad/Ad";
import {Item} from "../models/commons/Item";

@Injectable({
  providedIn: 'root'
})
export class FilterController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  loadCities(): Observable<Item[]> {
    return this.httpService.get('/cities', {})
      .pipe(map((value) => value.body.data[0] as Item[]));
  }

}
