import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {RoomItem} from "../../../models/commons/ad/RoomItem";
import {AdService} from "../../../services/common/ad.service";
import {RoommateItem} from "../../../models/commons/ad/RoommateItem";

@Component({
  selector: 'app-roommate-detail',
  templateUrl: './roommate-detail.page.html',
  styleUrls: ['./roommate-detail.page.scss'],
})
export class RoommateDetailPage implements OnInit {

  roommate: RoommateItem;
  roommates: RoommateItem[];

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
    const roommateId = this.route.snapshot?.params?.id;

    this.roommate = this.adService.loadRoommateById(roommateId);
    this.roommates = this.adService.loadRoommatesOther(roommateId);
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
