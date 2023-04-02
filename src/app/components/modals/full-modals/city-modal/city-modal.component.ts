import {
  Component,
  OnInit
} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {CityService} from "../../../../services/common/city.service";
import {CommonItem} from "../../../../models/commons/CommonItem";

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss'],
})
export class CityModalComponent implements OnInit {

  cities: CommonItem[];

  constructor(private modalService: ModalService,
              private cityService: CityService) {
  }

  async ngOnInit() {
    this.cities = this.cityService.loadCities();
  }

  close() {
    this.modalService.dismiss();
  }

  onClickCity(city: CommonItem) {
    this.modalService.dismiss();
  }
}
