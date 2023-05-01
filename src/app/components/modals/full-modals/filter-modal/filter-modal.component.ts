import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {SettingControllerService} from "../../../../services/controllers/setting-controller.service";
import {Item} from "../../../../models/commons/Item";
import {FilterType} from "../../../../models/commons/ad/FilterType";
import {isEmpty} from "../../../../shares/cores/util-method";

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  selectedRoomQuantity: string;
  roomsQuantity: string[] = [
    '1', '2', '3', '4', '5+'
  ];
  selectedCity: Item[];
  genderType: Item[];

  type = FilterType;

  constructor(private modalService: ModalService,
              private settingControllerService: SettingControllerService) {
  }

  async ngOnInit() {
  }

  close() {
    this.modalService.dismiss().then();
  }

  reset() {

  }

  onClick(title?: string, code?: FilterType) {

    this.settingControllerService.setSelectModal(title, code).presentSecondary().then(x => {
      if (!x?.data || isEmpty(x?.data)) {
        return;
      }

      if (FilterType.CITY === code) {
        this.selectedCity = [x?.data];
      }

      if (FilterType.GENDER_TYPE === code) {
        this.genderType = [x?.data];
      }
    })

  }

}
