import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {CommonItem} from "../../../../models/commons/CommonItem";
import {FilterService} from "../../../../services/common/filter.service";

@Component({
  selector: 'app-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.scss'],
})
export class SelectModalComponent implements OnInit {

  @Input() title: string = 'Город';
  @Input() code: string;
  values: CommonItem[];

  constructor(private navCtrl: NavController,
              private modalService: ModalService,
              private filterService: FilterService) {
  }

  ngOnInit() {
    this.values = this.filterService.getCities();
  }

  onClickItem(item: CommonItem) {
    this.filterService.updateCityFilter(item);
  }

}
