import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {CityService} from "../../../../services/common/city.service";
import {Item} from "../../../../models/commons/Item";
import {FilterService} from "../../../../services/common/filter.service";

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss'],
})
export class CityModalComponent implements OnInit {

  cities: Item[];

  constructor(private modalService: ModalService,
              private cityService: CityService,
              private filterService: FilterService) {
  }

  async ngOnInit() {
    this.cities = await this.filterService.loadCities();
    console.log('uxG8OFBH :: ', this.cities)
  }

  close() {
    this.modalService.dismiss();
  }

  onClickCity(city: Item) {
    this.modalService.dismiss();
  }
}
