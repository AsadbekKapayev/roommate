import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import {TestController} from "../../../controllers/TestController";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {Item} from "../../../models/commons/Item";
import {ProfileService} from "../../../services/core/profile.service";
import {IMAGES} from "../../../components/grids/room-grid/room-grid.component";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {

  room: Ad;
  rooms: Ad[];

  gender: Item;
  genders: Item[];

  utilChips: string[] = ['Мебель', 'Балкон', 'Газ', 'Интернет'] // todo
  chips2: string[] = ['Можно держать животных', 'Можно курить']; // todo

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private testController: TestController,
              private profileService: ProfileService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAdDetail();
  }

  initAdDetail() {
    const roomId = this.route.snapshot?.params?.id;

    forkJoin({
      ad: this.adService.loadRoomById(roomId),
      genders: this.profileService.loadGenders()
    }).subscribe(x => {
      x.ad.media = this.shuffleArray(IMAGES);
      this.room = x.ad;
      this.genders = x.genders;
      this.gender = this.genders.find(g => g.id === this.gender?.id);
    })

    this.adService.loadRooms(1).pipe(
      take(1)
    ).subscribe(x => {
      this.rooms = x.data;
    });
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  shuffleArray(array) {
    let m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
