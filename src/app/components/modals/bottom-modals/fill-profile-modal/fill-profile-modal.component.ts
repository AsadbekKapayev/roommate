import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";

@Component({
  selector: 'app-fill-profile-modal',
  templateUrl: './fill-profile-modal.component.html',
  styleUrls: ['./fill-profile-modal.component.scss'],
})
export class FillProfileModalComponent implements OnInit {

  constructor(private navCtrl: NavController,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  dismiss(value: boolean) {
    this.modalService.dismiss(value);
  }
}
