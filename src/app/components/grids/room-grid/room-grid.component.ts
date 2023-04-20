import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {

  @Input() rooms: Ad[];

  @Output() likeClicked = new EventEmitter<Ad>();

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickRoom(room: Ad) {
    this.navCtrl.navigateForward(ALL_URL.ROOM_DETAIL + room.id).then();
  }

  onClickLike(room: Ad) {
    this.rooms.find(x => x.id === room.id).isLiked = !room.isLiked;
    this.likeClicked.emit(room);
  }
}
