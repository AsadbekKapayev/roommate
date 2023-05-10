import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {ALL_URL} from "../../../../shares/url-static";
import {SettingControllerService} from "../../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-fill-profile-modal',
  templateUrl: './fill-profile-modal.component.html',
  styleUrls: ['./fill-profile-modal.component.scss'],
})
export class FillProfileModalComponent implements OnInit {

  constructor(private navCtrl: NavController,
              private settingControllerService: SettingControllerService,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  dismiss(value: boolean) {
    this.modalService.dismiss();
    if (value) {
      this.navCtrl.navigateRoot(ALL_URL.TAB_PROFILE).then(() => {
        this.settingControllerService.setSettingModal().presentSecondary().then();
      });
    }

    this.navCtrl.navigateRoot(ALL_URL.TAB_HOME).then();
  }
}
