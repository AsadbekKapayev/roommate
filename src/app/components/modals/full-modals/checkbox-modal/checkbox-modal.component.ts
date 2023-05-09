import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {FilterService} from "../../../../services/common/filter.service";
import {Item} from "../../../../models/commons/Item";
import {FilterType} from "../../../../models/commons/ad/FilterType";

@Component({
  selector: 'app-checkbox-modal',
  templateUrl: './checkbox-modal.component.html',
  styleUrls: ['./checkbox-modal.component.scss'],
})
export class CheckboxModalComponent implements OnInit {

  @Input() title: string;

  @Input() set selectedValues(selectedValues: Item[]) {
    if (!selectedValues?.length) {
      return;
    }

    this._selectedValues = selectedValues;
  }

  _selectedValues: Item[];


  @Input() set code(code: FilterType) {
    if (code === FilterType.CITY) {
      this.filterService.loadCities().then(x => this.values = x);
    }

    if (code === FilterType.GENDER_TYPE) {
      this.filterService.loadGenderTypes().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_CONDITIONS) {
      this.filterService.loadApartmentConditions().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_FURNITURE) {
      this.filterService.loadApartmentFurniture().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_FACILITIES) {
      this.filterService.loadApartmentFacilities().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_BATHROOM_TYPES) {
      this.filterService.loadApartmentBathroomTypes().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_FURNITURE_STATUSES) {
      this.filterService.loadApartmentFurnitureStatuses().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_BATHROOMS) {
      this.filterService.loadApartmentBathrooms().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_SECURITIES) {
      this.filterService.loadApartmentSecurities().then(x => this.values = x);
    }

    if (code === FilterType.WINDOW_DIRECTIONS) {
      this.filterService.loadWindowDirections().then(x => this.values = x);
    }

    if (code === FilterType.APARTMENT_FOR) {
      this.filterService.loadApartmentFor().then(x => this.values = x);
    }
  }

  values: Item[];

  constructor(private navCtrl: NavController,
              private modalService: ModalService,
              private filterService: FilterService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalService.dismiss();
  }

  onSelectItem(item: Item) {
    if (!this._selectedValues) {
      this._selectedValues = [];
    }

    if (!this._selectedValues.find(x => x?.id === item?.id)) {
      this._selectedValues.push(item);
      return;
    }

    this._selectedValues = this._selectedValues?.filter(x => x.id !== item.id);
  }

  onClickButton() {
    this.modalService.dismiss(this._selectedValues);
  }

  contains(item: Item) {
    console.log('emFHgk5o :: ', this._selectedValues)

    return Boolean(this._selectedValues?.find(x => x.id === item?.id));
  }

}
