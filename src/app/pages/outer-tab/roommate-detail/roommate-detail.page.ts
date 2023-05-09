import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {forkJoin, take} from "rxjs";
import {ProfileService} from "../../../services/core/profile.service";
import {Item} from "../../../models/commons/Item";
import {User} from "../../../models/commons/user/User";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {toArray} from "../../../shares/cores/util-method";
import ymaps from 'ymaps';

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

  author: User;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private profileService: ProfileService,
              private route: ActivatedRoute,
              private settingControllerService: SettingControllerService,
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
      this.loadMap(toArray(x.ad?.coordinates, ','), x.ad?.location);

      this.author = x.ad?.user;
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

  onClickPhone() {
    this.settingControllerService.setPhoneModal(this.author?.phone_number).present().then();
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
