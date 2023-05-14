import {Injectable} from '@angular/core';
import {FilterController} from "../../controllers/FilterController";
import {Relations} from "../../models/commons/Relations";
import {Filter} from "../../models/commons/ad/Filter";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter: Filter;
  relations: Relations;

  constructor(private filterController: FilterController) {
    this.loadRelations();
  }

  async loadRelations(): Promise<Relations> {
    const relations = await this.filterController.loadRelations().toPromise();
    return this.relations ?? relations;
  }

  async loadCities() {
    return (await this.loadRelations()).cities;
  }

  async loadCityById(id: number) {
    return (await this.loadRelations()).cities?.filter(x => x.id === id);
  }

  async loadGenderTypes() {
    return (await this.loadRelations()).ad_gender_types;
  }

  async loadGenderTypeById(id: number) {
    return (await this.loadRelations()).ad_gender_types?.filter(x => x.id === id);
  }

  async loadApartmentConditions() {
    return (await this.loadRelations()).apartmentConditions;
  }

  async loadApartmentFurniture() {
    return (await this.loadRelations()).apartmentFurniture;
  }

  async loadApartmentFacilities() {
    return (await this.loadRelations()).apartmentFacilities;
  }

  async loadApartmentBathroomTypes() {
    return (await this.loadRelations()).apartmentBathroomTypes;
  }

  async loadApartmentFurnitureStatuses() {
    return (await this.loadRelations()).apartmentFurnitureStatuses;
  }

  async loadApartmentBathrooms() {
    return (await this.loadRelations()).apartmentBathrooms;
  }

  async loadApartmentSecurities() {
    return (await this.loadRelations()).apartmentSecurities;
  }

  async loadWindowDirections() {
    return (await this.loadRelations()).windowDirections;
  }

  async loadApartmentFor() {
    return (await this.loadRelations()).apartmentFor;
  }

}
