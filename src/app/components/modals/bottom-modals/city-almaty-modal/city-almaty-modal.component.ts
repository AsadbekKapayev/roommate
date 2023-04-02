import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";

@Component({
  selector: 'app-city-almaty-modal',
  templateUrl: './city-almaty-modal.component.html',
  styleUrls: ['./city-almaty-modal.component.scss'],
})
export class CityAlmatyModalComponent implements OnInit {

  constructor(private navCtrl: NavController,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  dismiss(value: boolean) {
    this.modalService.dismiss(value);
  }
}
