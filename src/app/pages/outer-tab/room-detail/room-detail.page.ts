import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {Item} from "../../../models/commons/Item";
import {ProfileService} from "../../../services/core/profile.service";
import {User} from "../../../models/commons/user/User";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import ymaps from 'ymaps';
import {toArray} from "../../../shares/cores/util-method";

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

  author: User;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private settingControllerService: SettingControllerService,
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
      this.loadMap(toArray(x.ad?.coordinates, ','), x.ad?.location);

      this.author = x.ad?.user;
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

  onClickPhone() {
    this.settingControllerService.setPhoneModal('+' + this.author?.phone_number).present().then();
  }

  async loadMap(coords, location) {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp&apikey=80cba268-81a1-44b3-a4fd-b15b982ed47d')
      .then(maps => {
        const map = new maps.Map('map', {
          center: coords,
          zoom: 12,
          controls: [
            'fullscreenControl',
            'geolocationControl',
            'zoomControl',
          ],
        }, {
          searchControlProvider: 'yandex#search'
        });

        const myPlacemark = this.createPlacemark(maps, location, coords);
        map.geoObjects.add(myPlacemark);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  createPlacemark(maps, location, coords) {
    return new maps.Placemark(coords, {
      iconCaption: location
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

}
