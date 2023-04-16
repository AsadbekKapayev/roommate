import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";
import {TestController} from "../../../controllers/TestController";
import {Ad} from "../../../models/commons/ad/Ad";
import {take} from "rxjs";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {

  room: RoomItem;
  rooms: Ad[];

  utilChips: string[] = ['Мебель', 'Балкон', 'Газ', 'Интернет'] // todo
  chips2: string[] = ['Можно держать животных', 'Можно курить']; // todo

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private testController: TestController,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAdDetail();

    this.testController.loadGenders().toPromise().then(x => {
      console.log('P738E33h :: ', x)
    })
  }

  initAdDetail() {
    const roomId = this.route.snapshot?.params?.id;
    this.room = this.adService.loadRoomById(roomId);

    this.adService.loadRooms().pipe(
      take(1)
    ).subscribe(x => {
      this.rooms = x.data;
    });
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
