import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {TokenService} from "../../../services/common/token.service";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {

  @Input() set rooms(rooms: Ad[]) {
    this._rooms = rooms;
  }

  @Input() showEditIcon: boolean;
  @Input() showStatusModeration: boolean;

  @Output() likeClicked = new EventEmitter<Ad>();
  @Output() categoryClicked = new EventEmitter<Ad>();

  _rooms: Ad[];

  constructor(private navCtrl: NavController,
              private tokenService: TokenService,
              private settingControllerService: SettingControllerService,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickRoom(room: Ad) {
    this.navCtrl.navigateForward(ALL_URL.ROOM_DETAIL + room.id).then();
  }

  onClickLike(room: Ad) {
    if (!this.tokenService.token) {
      this.navCtrl.navigateForward(ALL_URL.LOGIN).then();
      return;
    }

    this._rooms.find(x => x.id === room.id).user_liked = !room.user_liked;
    this.likeClicked.emit(room);
  }

  onClickEdit(ad: Ad) {
    this.categoryClicked.emit(ad);
  }

}
