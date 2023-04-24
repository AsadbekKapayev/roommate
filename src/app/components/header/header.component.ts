import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../../services/controllers/setting-controller.service";
import {ALL_URL} from "../../shares/url-static";
import {TokenService} from "../../services/common/token.service";
import {ToastService} from "../../services/core/toast.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() showBackButtonDefault: boolean;
  @Input() showBackButton: boolean;
  @Input() showCloseButton: boolean;
  @Input() showResetButton: boolean;
  @Input() showFiltersButton: boolean;
  @Input() showSettingButton: boolean;
  @Input() showExitButton: boolean;

  @Output() onBackClicked: EventEmitter<string> = new EventEmitter();
  @Output() onCloseClicked: EventEmitter<string> = new EventEmitter();
  @Output() onResetClicked: EventEmitter<string> = new EventEmitter();

  constructor(private navCtrl: NavController,
              private tokenService: TokenService,
              private toastService: ToastService,
              private settingControllerService: SettingControllerService) {
  }

  ngOnInit() {
  }

  goBack() {
    if (this.showBackButton) {
      this.onBackClicked.emit();
      return;
    }

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
    this.settingControllerService.setSettingModal().present().then();
  }

  onClickExit() {
    this.tokenService.resetToken();
    this.navCtrl.navigateRoot(ALL_URL.TAB_HOME).then();
  }

}
