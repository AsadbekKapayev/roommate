import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {SettingControllerService} from "../../../../services/controllers/setting-controller.service";
import {Item} from "../../../../models/commons/Item";
import {FilterType} from "../../../../models/commons/ad/FilterType";
import {getId, isEmpty} from "../../../../shares/cores/util-method";
import {FilterService} from "../../../../services/common/filter.service";
import {Filter} from "../../../../models/commons/ad/Filter";
import {FilterGetAdService} from "../../../../services/common/filter-get-ad.service";

@Component({
  selector: 'app-filter-roommate-modal',
  templateUrl: './filter-roommate-modal.component.html',
  styleUrls: ['./filter-roommate-modal.component.scss'],
})
export class FilterRoommateModalComponent implements OnInit {

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
              private filterGetAdService: FilterGetAdService,
              private settingControllerService: SettingControllerService) {
  }

  async ngOnInit() {
    this.setData().then();
  }

  close() {
    this.modalService.dismiss().then();
  }

  async setData() {
    this.filter = new Filter();

    this.filter.price_to = this.filterGetAdService.priceTo$.value;
    this.filter.price_from = this.filterGetAdService.priceFrom$.value;
    this.filter.search_text = this.filterGetAdService.searchText$.value;
    this.filter.rooms_count = this.filterGetAdService.roomsCount$.value;
    this.filter.roommate_count = this.filterGetAdService.roommatesCount$.value;
    this.filter.bathrooms_count = this.filterGetAdService.bathroomsCount$.value;
    this.filter.balconies_count = this.filterGetAdService.balconiesCount$.value;
    this.filter.loggias_count = this.filterGetAdService.loggiasCount$.value;
    this.filter.floor = this.filterGetAdService.floor$.value;
    this.filter.floor_from = this.filterGetAdService.floorFrom$.value;
    this.filter.square_general = this.filterGetAdService.squareGeneral$.value;
    this.filter.square_kitchen = this.filterGetAdService.squareKitchen$.value;
    this.filter.square_living = this.filterGetAdService.squareLiving$.value;

    this.selectedCity = await this.filterService.loadCityById(this.filterGetAdService.city$.value);
    this.selectedGenderType = await this.filterService.loadGenderTypeById(this.filterGetAdService.adGenderType$.value);
  }

  reset() {
    this.filterGetAdService.reset();
    this.setData().then();
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

  onChangFilter(filter: string, value: number | string) {

    if (filter === 'search_text') {
      this.filterGetAdService.searchText$.next(value as string);
    }
    if (filter === 'price_to') {
      this.filterGetAdService.priceTo$.next(value as number);
    }
    if (filter === 'price_from') {
      this.filterGetAdService.priceFrom$.next(value as number);
    }
    if (filter === 'rooms_count') {
      this.filterGetAdService.roomsCount$.next(value as number);
    }
    if (filter === 'roommate_count') {
      this.filterGetAdService.roommatesCount$.next(value as number);
    }
    if (filter === 'floor') {
      this.filterGetAdService.floor$.next(value as number);
    }
    if (filter === 'floor_from') {
      this.filterGetAdService.floorFrom$.next(value as number);
    }
    if (filter === 'bathrooms_count') {
      this.filterGetAdService.bathroomsCount$.next(value as number);
    }
    if (filter === 'balconies_count') {
      this.filterGetAdService.balconiesCount$.next(value as number);
    }
    if (filter === 'loggias_count') {
      this.filterGetAdService.loggiasCount$.next(value as number);
    }
    if (filter === 'square_general') {
      this.filterGetAdService.squareGeneral$.next(value as number);
    }
    if (filter === 'square_living') {
      this.filterGetAdService.squareLiving$.next(value as number);
    }
    if (filter === 'square_kitchen') {
      this.filterGetAdService.squareKitchen$.next(value as number);
    }

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
        this.filterGetAdService.city$.next(getId(values));
        return;
      case FilterType.GENDER_TYPE:
        this.selectedGenderType = values;
        this.filterGetAdService.adGenderType$.next(getId(values));
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
