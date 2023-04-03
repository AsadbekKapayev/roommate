import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {GuideService} from "../../../services/common/guide.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {

  room: RoomItem;
  rooms: RoomItem[];

  utilChips: string[] = ['Мебель', 'Балкон', 'Газ', 'Интернет'] // todo
  chips2: string[] = ['Можно держать животных', 'Можно курить']; // todo

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAdDetail();

  }

  initAdDetail() {
    const roomId = this.route.snapshot?.params?.id;

    this.room = this.adService.loadRoomById(roomId);
    this.rooms = this.adService.loadRoomsOther(roomId);
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
