import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {AdService} from "../../../services/common/ad.service";
import {RoommateItem} from "../../../models/commons/ad/RoommateItem";
import {Ad} from "../../../models/commons/ad/Ad";

@Component({
  selector: 'app-roommate-grid',
  templateUrl: './roommate-grid.component.html',
  styleUrls: ['./roommate-grid.component.scss'],
})
export class RoommateGridComponent implements OnInit {

  @Input() roommates: Ad[];

  @Output() likeClicked = new EventEmitter<Ad>();

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickAd(roommate: Ad) {
    this.navCtrl.navigateForward(ALL_URL.ROOMMATE_DETAIL + roommate.id).then();
  }

  onClickLike(roommate: Ad) {
    this.roommates.find(x => x.id === roommate.id).isLiked = !roommate.isLiked;
    this.likeClicked.emit(roommate);
  }
}
