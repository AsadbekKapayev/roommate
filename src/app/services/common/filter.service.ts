import {Injectable} from '@angular/core';
import {RoomItem} from "../../models/commons/ad/RoomItem";
import {RoommateItem} from "../../models/commons/ad/RoommateItem";
import {AdController} from "../../controllers/AdController";
import {FilterController} from "../../controllers/FilterController";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private filterController: FilterController) {
  }

  loadCities() {
    return this.filterController.loadCities();
  }

  loadGenderTypes() {
    return this.filterController.loadGenderTypes();
  }

}
