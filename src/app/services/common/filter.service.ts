import {Injectable} from "@angular/core";
import {CityService} from "./city.service";
import {BehaviorSubject} from "rxjs";
import {CommonItem} from "../../models/commons/CommonItem";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  cityFiltersSubject: BehaviorSubject<CommonItem> = new BehaviorSubject<CommonItem>(null);
  cityFilters$: Observable<CommonItem> = this.cityFiltersSubject.asObservable();

  constructor(private cityService: CityService) {
  }

  getCities() {
    return this.cityService.loadCities();
  }

  updateCityFilter(city: CommonItem) {
    this.cityFiltersSubject.next(city);
  }

}
