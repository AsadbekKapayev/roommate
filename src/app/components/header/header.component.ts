import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../../services/controllers/setting-controller.service";
import {ALL_URL} from "../../shares/url-static";

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
  @Input() showSettingButton: boolean;

  @Output() onCloseClicked: EventEmitter<string> = new EventEmitter();
  @Output() onResetClicked: EventEmitter<string> = new EventEmitter();

  constructor(private navCtrl: NavController,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  onClickFilter() {
    this.settingControllerService.setFilterModal().present().then();
  }

  onClickClose() {
    this.onCloseClicked.emit();
  }

  onClickReset() {
    this.onResetClicked.emit();
  }

  onClickSetting() {
    this.navCtrl.navigateForward('');
  }
}
