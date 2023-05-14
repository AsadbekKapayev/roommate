import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {TokenService} from "../../../services/common/token.service";
import {AdType} from "../../../models/commons/ad/AdType";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-roommate-grid',
  templateUrl: './roommate-grid.component.html',
  styleUrls: ['./roommate-grid.component.scss'],
})
export class RoommateGridComponent implements OnInit {

  @Input() roommates: Ad[];
  @Input() showEditIcon: boolean;

  @Output() likeClicked = new EventEmitter<Ad>();
  @Output() categoryClicked = new EventEmitter<Ad>();

  constructor(private navCtrl: NavController,
              private tokenService: TokenService,
              private settingControllerService: SettingControllerService,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickAd(roommate: Ad) {
    this.navCtrl.navigateForward(ALL_URL.ROOMMATE_DETAIL + roommate.id).then();
  }

  onClickLike(roommate: Ad) {
    if (!this.tokenService.token) {
      this.navCtrl.navigateForward(ALL_URL.LOGIN).then();
      return;
    }

    this.roommates.find(x => x.id === roommate.id).user_liked = !roommate.user_liked;
    this.likeClicked.emit(roommate);
  }

  onClickEdit(ad: Ad) {
    this.categoryClicked.emit(ad);
  }

}
