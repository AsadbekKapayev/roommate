import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../../services/controllers/setting-controller.service";
import {ALL_URL} from "../../shares/url-static";
import {TokenService} from "../../services/common/token.service";
import {ToastService} from "../../services/core/toast.service";
import {AuthService} from "../../services/core/auth.service";
import {ImageService} from "../../services/common/image.service";
import {StorageService} from "../../storages/storage.service";

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
  @Output() onFilterClicked: EventEmitter<string> = new EventEmitter();

  constructor(private navCtrl: NavController,
              private authService: AuthService,
              private tokenService: TokenService,
              private toastService: ToastService,
              private storageService: StorageService,
              private imageService: ImageService,
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
    this.onFilterClicked.emit();
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
    this.authService.logout().toPromise().then();
    this.tokenService.resetToken();
    this.imageService.clearData();
    this.storageService.clear();
    this.navCtrl.navigateRoot(ALL_URL.TAB_HOME).then();
  }

}
