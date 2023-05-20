import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {SettingControllerService} from "../../../../services/controllers/setting-controller.service";
import {Item} from "../../../../models/commons/Item";
import {FilterType} from "../../../../models/commons/ad/FilterType";
import {getId, isEmpty} from "../../../../shares/cores/util-method";
import {FilterService} from "../../../../services/common/filter.service";
import {FilterSearchAdService} from "../../../../services/common/filter-search-ad.service";
import {Filter} from "../../../../models/commons/ad/Filter";

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  filter: Filter;

  selectedCity: Item[];
  selectedGenderType: Item[];
  selectedApartmentConditions: Item[];
  selectedApartmentFurniture: Item[];
  selectedApartmentFacilities: Item[];
  selectedApartmentBathroomTypes: Item[];
  selectedApartmentFurnitureStatuses: Item[];
  selectedApartmentBathrooms: Item[];
  selectedApartmentSecurities: Item[];
  selectedWindowDirections: Item[];
  selectedApartmentFor: Item[];

  type = FilterType;

  constructor(private modalService: ModalService,
              private filterService: FilterService,
              private filterSearchAdService: FilterSearchAdService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
    this.setData().then();
  }

  close() {
    this.modalService.dismiss().then();
  }

  async setData() {
    this.filter = new Filter();

    this.filter.price_to = this.filterSearchAdService.priceTo$.value;
    this.filter.price_from = this.filterSearchAdService.priceFrom$.value;
    this.filter.search_text = this.filterSearchAdService.searchText$.value;
    this.filter.rooms_count = this.filterSearchAdService.roomsCount$.value;
    this.filter.roommate_count = this.filterSearchAdService.roommatesCount$.value;
    this.filter.bathrooms_count = this.filterSearchAdService.bathroomsCount$.value;
    this.filter.balconies_count = this.filterSearchAdService.balconiesCount$.value;
    this.filter.loggias_count = this.filterSearchAdService.loggiasCount$.value;
    this.filter.floor = this.filterSearchAdService.floor$.value;
    this.filter.floor_from = this.filterSearchAdService.floorFrom$.value;
    this.filter.square_general = this.filterSearchAdService.squareGeneral$.value;
    this.filter.square_kitchen = this.filterSearchAdService.squareKitchen$.value;
    this.filter.square_living = this.filterSearchAdService.squareLiving$.value;

    this.selectedCity = await this.filterService.loadCityById(this.filterSearchAdService.city$.value);
    this.selectedGenderType = await this.filterService.loadGenderTypeById(this.filterSearchAdService.adGenderType$.value);
  }

  reset() {
    this.filterSearchAdService.reset();
    this.setData().then();
  }

  onChangFilter(filter: string, value: number | string) {

    if (filter === 'search_text') {
      this.filterSearchAdService.searchText$.next(value as string);
    }
    if (filter === 'price_to') {
      this.filterSearchAdService.priceTo$.next(value as number);
    }
    if (filter === 'price_from') {
      this.filterSearchAdService.priceFrom$.next(value as number);
    }
    if (filter === 'rooms_count') {
      this.filterSearchAdService.roomsCount$.next(value as number);
    }
    if (filter === 'roommate_count') {
      this.filterSearchAdService.roommatesCount$.next(value as number);
    }
    if (filter === 'floor') {
      this.filterSearchAdService.floor$.next(value as number);
    }
    if (filter === 'floor_from') {
      this.filterSearchAdService.floorFrom$.next(value as number);
    }
    if (filter === 'bathrooms_count') {
      this.filterSearchAdService.bathroomsCount$.next(value as number);
    }
    if (filter === 'balconies_count') {
      this.filterSearchAdService.balconiesCount$.next(value as number);
    }
    if (filter === 'loggias_count') {
      this.filterSearchAdService.loggiasCount$.next(value as number);
    }
    if (filter === 'square_general') {
      this.filterSearchAdService.squareGeneral$.next(value as number);
    }
    if (filter === 'square_living') {
      this.filterSearchAdService.squareLiving$.next(value as number);
    }
    if (filter === 'square_kitchen') {
      this.filterSearchAdService.squareKitchen$.next(value as number);
    }

  }

  onClick(title?: string, code?: FilterType, isCheckboxModal?: boolean) {
    if (isCheckboxModal) {
      this.settingControllerService.setCheckboxModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
        if (!x?.data || isEmpty(x?.data)) {
          return;
        }

        this.setItemsByCode(code, x.data);
      });

      return;
    }

    this.settingControllerService.setSelectModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
      if (!x?.data || isEmpty(x?.data)) {
        return;
      }

      this.setItemsByCode(code, [x.data]);
    });

  }

  getItemsByCode(code: FilterType) {
    switch (code) {
      case FilterType.CITY:
        return this.selectedCity;
      case FilterType.GENDER_TYPE:
        return this.selectedGenderType;
      case FilterType.APARTMENT_CONDITIONS:
        return this.selectedApartmentConditions;
      case FilterType.APARTMENT_FURNITURE:
        return this.selectedApartmentFurniture;
      case FilterType.APARTMENT_FACILITIES:
        return this.selectedApartmentFacilities;
      case FilterType.APARTMENT_BATHROOM_TYPES:
        return this.selectedApartmentBathroomTypes;
      case FilterType.APARTMENT_FURNITURE_STATUSES:
        return this.selectedApartmentFurnitureStatuses;
      case FilterType.APARTMENT_BATHROOMS:
        return this.selectedApartmentBathrooms;
      case FilterType.APARTMENT_SECURITIES:
        return this.selectedApartmentSecurities;
      case FilterType.WINDOW_DIRECTIONS:
        return this.selectedWindowDirections;
      case FilterType.APARTMENT_FOR:
        return this.selectedApartmentFor;
    }
  }

  setItemsByCode(code: FilterType, values: Item[]) {
    switch (code) {
      case FilterType.CITY:
        this.selectedCity = values;
        this.filterSearchAdService.city$.next(getId(values));
        return;
      case FilterType.GENDER_TYPE:
        this.selectedGenderType = values;
        this.filterSearchAdService.adGenderType$.next(getId(values));
        return;
      case FilterType.APARTMENT_CONDITIONS:
        this.selectedApartmentConditions = values;
        return;
      case FilterType.APARTMENT_FURNITURE:
        this.selectedApartmentFurniture = values;
        return;
      case FilterType.APARTMENT_FACILITIES:
        this.selectedApartmentFacilities = values;
        return;
      case FilterType.APARTMENT_BATHROOM_TYPES:
        this.selectedApartmentBathroomTypes = values;
        return;
      case FilterType.APARTMENT_FURNITURE_STATUSES:
        this.selectedApartmentFurnitureStatuses = values;
        return;
      case FilterType.APARTMENT_BATHROOMS:
        this.selectedApartmentBathrooms = values;
        return;
      case FilterType.APARTMENT_SECURITIES:
        this.selectedApartmentSecurities = values;
        return;
      case FilterType.WINDOW_DIRECTIONS:
        this.selectedWindowDirections = values;
        return;
      case FilterType.APARTMENT_FOR:
        this.selectedApartmentFor = values;
        return;
    }
  }

  onClickSearch() {
    this.modalService.dismiss('search').then();
  }

}
