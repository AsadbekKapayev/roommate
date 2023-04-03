import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {GuideService} from "../../../services/common/guide.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {AdType} from "../../../models/commons/ad/AdType";
import {AdService} from "../../../services/common/ad.service";
import {RoomItem} from "../../../models/commons/ad/RoomItem";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ads: RoomItem[];

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
    this.ads = this.adService.loadRooms();
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });
  }

}
