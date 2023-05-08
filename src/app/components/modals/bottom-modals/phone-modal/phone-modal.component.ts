import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: ['./phone-modal.component.scss'],
})
export class PhoneModalComponent implements OnInit {

  @Input() phone: string;

  constructor(private navCtrl: NavController,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  onClickWhatsapp() {

  }

  onClickCall() {

  }

}
