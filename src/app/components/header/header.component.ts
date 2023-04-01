import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() showBackButton: boolean;
  @Input() showCloseButton: boolean;
  @Input() showResetButton: boolean;
  @Input() showFiltersButton: boolean;

  constructor(private navCtrl: NavController,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  onClickFilter() {
    this.settingControllerService.setFilterModal().present().then()
  }

  onClickClose() {

  }
}
