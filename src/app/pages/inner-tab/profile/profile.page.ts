import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {AdType} from "../../../models/commons/ad/AdType";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {take} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  rooms: Ad[];
  roommates: Ad[];

  adType = AdType;
  selectedCategory: string = AdType.ROOMMATE;
  categories: IonicButton[] = [
    {
      id: AdType.ROOMMATE,
      title: 'Ищу сожителя',
      selected: true,
    },
    {
      id: AdType.ROOM,
      title: 'Сниму комнату',
    },
  ];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });

    this.selectedCategory = category.id;
  }

  initAds() {
    this.adService.loadRooms(1).pipe(
      take(1)
    ).subscribe(x => {
      this.rooms = x.data;
    });

    this.adService.loadRoommates(1).pipe(
      take(1)
    ).subscribe(x => {
      this.roommates = x.data;
    });
  }

}
