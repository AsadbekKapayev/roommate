import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {FilterService} from "../../../../services/common/filter.service";
import {of, take} from "rxjs";
import {Item} from "../../../../models/commons/Item";
import {FilterType} from "../../../../models/commons/ad/FilterType";

@Component({
  selector: 'app-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.scss'],
})
export class SelectModalComponent implements OnInit {

  @Input() title: string;
  @Input() selectedValue: Item;

  @Input() set code(code: FilterType) {
    let values;

    if (code === FilterType.CITY) {
      values = this.filterService.loadCities();
    }

    if (code === FilterType.GENDER_TYPE) {
      values = this.filterService.loadGenderTypes();
    }

    values?.pipe(
      take(1),
    ).subscribe(x => {
      this.values = x;
    })
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
    this.modalService.dismiss(item);
  }

}
