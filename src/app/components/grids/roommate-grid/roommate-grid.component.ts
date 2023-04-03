import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";
import {RoommateItem} from "../../../models/commons/ad/RoommateItem";

@Component({
  selector: 'app-roommate-grid',
  templateUrl: './roommate-grid.component.html',
  styleUrls: ['./roommate-grid.component.scss'],
})
export class RoommateGridComponent implements OnInit {

  @Input() roommates: RoommateItem[];

  @Output() likeClicked = new EventEmitter<RoommateItem>();

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickAd(roommate: RoommateItem) {
    this.navCtrl.navigateForward(ALL_URL.ROOMMATE_DETAIL + roommate.id).then();
  }

  onClickLike(roommate: RoommateItem) {
    this.roommates.find(x => x.id === roommate.id).isLiked = !roommate.isLiked;
    this.likeClicked.emit(roommate);
  }
}
