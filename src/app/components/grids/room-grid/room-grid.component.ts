import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {GuideItem} from "../../../models/commons/GuideItem";
import {ALL_URL} from "../../../shares/url-static";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {

  @Input() ads: RoomItem[];

  @Output() likeClicked = new EventEmitter<RoomItem>();

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickAd(ad: RoomItem) {
    this.navCtrl.navigateForward(ALL_URL.AD_DETAIL + ad.id).then();
  }

  onClickLike(ad: RoomItem) {
    this.ads.find(x => x.id === ad.id).isLiked = !ad.isLiked;
    this.likeClicked.emit(ad);
  }
}
