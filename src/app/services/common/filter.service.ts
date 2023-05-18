import {Injectable} from '@angular/core';
import {FilterController} from "../../controllers/FilterController";
import {Relations} from "../../models/commons/Relations";
import {Filter} from "../../models/commons/ad/Filter";
import {Item} from "../../models/commons/Item";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter: Filter;
  relations: Relations;

  constructor(private filterController: FilterController) {
  }

  async loadRelations(): Promise<Relations> {
    if (this.relations) {
      return this.relations;
    }

    this.relations = await this.filterController.loadRelations().toPromise();
    return this.relations;
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

  async loadApartmentConditionBy(id: number) {
    return (await this.loadRelations()).apartmentConditions?.find(x => x.id === id);
  }

  async loadApartmentFurniture() {
    return (await this.loadRelations()).apartmentFurniture;
  }

  async loadApartmentFurnitureIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentFurniture?.filter(x => ids.includes(x.id));
  }

  async loadApartmentFacilities() {
    return (await this.loadRelations()).apartmentFacilities;
  }

  async loadApartmentFacilitiesByIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentFacilities?.filter(x => ids.includes(x.id));
  }

  async loadApartmentBathroomTypes() {
    return (await this.loadRelations()).apartmentBathroomTypes;
  }

  async loadApartmentBathroomTypesByIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentBathroomTypes?.filter(x => ids.includes(x.id));
  }

  async loadApartmentFurnitureStatuses() {
    return (await this.loadRelations()).apartmentFurnitureStatuses;
  }

  async loadApartmentFurnitureStatusesById(id: number) {
    return (await this.loadRelations()).apartmentFurnitureStatuses?.find(x => x.id === id);
  }

  async loadApartmentBathrooms() {
    return (await this.loadRelations()).apartmentBathrooms;
  }

  async loadApartmentBathroomsByIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentBathrooms?.filter(x => ids.includes(x.id));
  }

  async loadApartmentSecurities() {
    return (await this.loadRelations()).apartmentSecurities;
  }

  async loadApartmentSecuritiesByIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentSecurities?.filter(x => ids.includes(x.id));
  }

  async loadWindowDirections() {
    return (await this.loadRelations()).windowDirections;
  }

  async loadWindowDirectionsByIds(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).windowDirections?.filter(x => ids.includes(x.id));
  }

  async loadApartmentFor() {
    return (await this.loadRelations()).apartmentFor;
  }

  async loadApartmentForById(items: Item[]) {
    const ids = items.map(item => item?.id);
    return (await this.loadRelations()).apartmentFor?.filter(x => ids.includes(x.id));
  }

}
