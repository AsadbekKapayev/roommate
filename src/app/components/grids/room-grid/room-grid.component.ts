import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../../../shares/url-static";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";

export const IMAGES = [
  'assets/images/house.jpg',
  'assets/images/house2.jpg',
  'assets/images/house3.jpg',
  'assets/images/house4.jpg',
  'assets/images/room1.jpg',
  'assets/images/room2.jpg',
];

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {

  @Input() set rooms(rooms: Ad[]) {
    rooms?.forEach(x => {
      const random = Math.floor(Math.random() * rooms?.length);
      x.media?.push(IMAGES[random])
    });
    this._rooms = rooms;
  }

  @Output() likeClicked = new EventEmitter<Ad>();

  _rooms: Ad[];

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  onClickRoom(room: Ad) {
    this.navCtrl.navigateForward(ALL_URL.ROOM_DETAIL + room.id).then();
  }

  onClickLike(room: Ad) {
    this._rooms.find(x => x.id === room.id).isLiked = !room.isLiked;
    this.likeClicked.emit(room);
  }
}
