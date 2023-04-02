import {
  Component,
  OnInit
} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {CityService} from "../../../../services/common/city.service";
import {CommonItem} from "../../../../models/commons/CommonItem";
import {Gender} from "../../../../models/commons/Gender";

@Component({
  selector: 'app-profile-setting-modal',
  templateUrl: './profile-setting-modal.component.html',
  styleUrls: ['./profile-setting-modal.component.scss'],
})
export class ProfileSettingModalComponent implements OnInit {

  cities: CommonItem[];

  gender = Gender;
  selectedGender: string;

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
