import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {ALL_URL} from "../../../../shares/url-static";

@Component({
  selector: 'app-create-ad-modal',
  templateUrl: './create-ad-modal.component.html',
  styleUrls: ['./create-ad-modal.component.scss'],
})
export class CreateAdModalComponent implements OnInit {

  @Input() phone: string;

  constructor(private navCtrl: NavController,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  roommate() {
    this.navCtrl.navigateForward(ALL_URL.CREATE_AD);
    this.modalService.dismiss();
  }

  room() {
    this.navCtrl.navigateForward(ALL_URL.CREATE_AD_ROOM);
    this.modalService.dismiss();
  }
}
