import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {ProfileService} from "../../../services/core/profile.service";
import {Item} from "../../../models/commons/Item";

@Component({
  selector: 'app-roommate-detail',
  templateUrl: './roommate-detail.page.html',
  styleUrls: ['./roommate-detail.page.scss'],
})
export class RoommateDetailPage implements OnInit {

  roommate: Ad;
  roommates: Ad[];

  utilChips: string[] = ['Мебель', 'Балкон', 'Газ', 'Интернет'] // todo
  chips2: string[] = ['Можно держать животных', 'Можно курить']; // todo

  genders: Item[];
  gender: Item;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private profileService: ProfileService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAdDetail();

  }

  initAdDetail() {
    const roommateId = this.route.snapshot?.params?.id;

    forkJoin({
      ad: this.adService.loadRoommateById(roommateId),
      genders: this.profileService.loadGenders()
    }).subscribe(x => {
      this.roommate = x.ad;
      this.genders = x.genders;
      this.gender = this.genders.find(g => g.id === this.gender?.id);
    })

    this.adService.loadRoommates(1).pipe(
      take(1)
    ).subscribe(x => {
      this.roommates = x.data;
    });
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
