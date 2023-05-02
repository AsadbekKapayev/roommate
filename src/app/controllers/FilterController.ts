import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/internal/Observable";
import {Item} from "../models/commons/Item";
import {Relations} from "../models/commons/Relations";

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

  loadGenderTypes(): Observable<Item[]> {
    return this.httpService.get('/ad_gender_types', {})
      .pipe(map((value) => value.body.data[0] as Item[]));
  }

  loadRelations(): Observable<Relations> {
    return this.httpService.get('/search_ad/relations', {})
      .pipe(map((value) => value.body.data[0] as Relations));
  }

}
