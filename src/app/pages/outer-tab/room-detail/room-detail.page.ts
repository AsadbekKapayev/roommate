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
import {itemsToStr, toArray} from "../../../shares/cores/util-method";
import {FilterType} from "../../../models/commons/ad/FilterType";
import {FilterService} from "../../../services/common/filter.service";

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

  apartment_condition: string;
  ad_gender_type_id: string;
  apartmentFurniture_ids: string;
  apartmentFacilities_ids: string;
  apartmentBathroomTypes_ids: string;
  apartmentSecurities_ids: string;
  apartmentBathrooms_ids: string;
  windowDirections: string;
  apartmentFor_ids: string;
  apartment_furniture_status_id: string;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private settingControllerService: SettingControllerService,
              private profileService: ProfileService,
              private filterService: FilterService,
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

      this.getDetailByCode(FilterType.APARTMENT_CONDITIONS, this.room?.apartment_condition_id).then(x => {
        this.apartment_condition = x;
      });

      this.getDetailByCode(FilterType.APARTMENT_FURNITURE, this.room?.apartment_furniture).then(x => {
        this.apartmentFurniture_ids = x;
      })

      this.getDetailByCode(FilterType.APARTMENT_FACILITIES, this.room?.apartment_facilities).then(x => {
        this.apartmentFacilities_ids = x;
      })
      this.getDetailByCode(FilterType.APARTMENT_BATHROOM_TYPES, this.room?.apartment_bathrooms_types).then(x => {
        this.apartmentBathroomTypes_ids = x;
      })
      this.getDetailByCode(FilterType.APARTMENT_SECURITIES, this.room?.apartment_securities).then(x => {
        this.apartmentSecurities_ids = x;
      })
      this.getDetailByCode(FilterType.APARTMENT_BATHROOMS, this.room?.apartment_bathrooms).then(x => {
        this.apartmentBathrooms_ids = x;
      })
      this.getDetailByCode(FilterType.WINDOW_DIRECTIONS, this.room?.window_directions).then(x => {
        this.windowDirections = x;
      })
      this.getDetailByCode(FilterType.APARTMENT_FOR, this.room?.apartment_for).then(x => {
        this.apartmentFor_ids = x;
      })
      this.getDetailByCode(FilterType.APARTMENT_FURNITURE_STATUSES, this.room?.apartment_furniture_status_id).then(x => {
        this.apartment_furniture_status_id = x;
      })
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
    });
  }

  async getDetailByCode(code: FilterType, value: number | Item[]) {

    if (code === FilterType.APARTMENT_CONDITIONS) {
      const filter = await this.filterService.loadApartmentConditionBy(value as number);
      return filter?.title;
    }
    if (code === FilterType.GENDER_TYPE) {
      const filter = await this.filterService.loadGenderTypeById(value as number);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_FURNITURE) {
      const filter = await this.filterService.loadApartmentFurnitureIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_FACILITIES) {
      const filter = await this.filterService.loadApartmentFacilitiesByIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_BATHROOM_TYPES) {
      const filter = await this.filterService.loadApartmentBathroomTypesByIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_SECURITIES) {
      const filter = await this.filterService.loadApartmentSecuritiesByIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_BATHROOMS) {
      const filter = await this.filterService.loadApartmentBathroomsByIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.WINDOW_DIRECTIONS) {
      const filter = await this.filterService.loadWindowDirectionsByIds(value as Item[]);
      return itemsToStr(filter);
    }
    if (code === FilterType.APARTMENT_FURNITURE_STATUSES) {
      const filter = await this.filterService.loadApartmentConditionBy(value as number);
      return filter?.title;
    }

    return '';
  }

}
