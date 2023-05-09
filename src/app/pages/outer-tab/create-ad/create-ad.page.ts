import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import ymaps from 'ymaps';
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {FilterType} from "../../../models/commons/ad/FilterType";
import {Item} from "../../../models/commons/Item";
import {isEmpty} from "../../../shares/cores/util-method";

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  styleUrls: ['./create-ad.page.scss'],
})
export class CreateAdPage implements OnInit {

  selectedRoomQuantity: string;
  roomsQuantity: string[] = [
    '1', '2', '3', '4', '5+'
  ];

  price_from: number;
  price_to: number;

  selectedCity: Item[];
  selectedGenderType: Item[];
  selectedApartmentConditions: Item[];
  selectedApartmentFurniture: Item[];
  selectedApartmentFacilities: Item[];
  selectedApartmentBathroomTypes: Item[];
  selectedApartmentFurnitureStatuses: Item[];
  selectedApartmentBathrooms: Item[];
  selectedApartmentSecurities: Item[];
  selectedWindowDirections: Item[];
  selectedApartmentFor: Item[];

  type = FilterType;
  mapError: string;
  mapValue: string;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService,
              private route: ActivatedRoute,
              private adService: AdService) {
  }

  ngOnInit() {
    this.loadMap().then();
  }

  async loadMap() {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp&apikey=80cba268-81a1-44b3-a4fd-b15b982ed47d')
      .then(maps => {
        const map = new maps.Map('map', {
          center: [43.237163, 76.945627],
          zoom: 12,
          controls: [
            'fullscreenControl',
            'geolocationControl',
            'zoomControl',
          ],
        }, {
          searchControlProvider: 'yandex#search'
        });

        let myPlacemark;

        map.events.add('click', (e) => {
          const coords = e.get('coords');

          if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
          } else {
            myPlacemark = this.createPlacemark(maps, coords);
            map.geoObjects.add(myPlacemark);
            myPlacemark.events.add('dragend', function () {
              this.getAddress(maps, myPlacemark, coords);
            });
          }
          this.getAddress(maps, myPlacemark, coords);
        })
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  createPlacemark(maps, coords) {
    return new maps.Placemark(coords, {
      iconCaption: 'поиск...'
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

  getAddress(maps, myPlacemark, coords) {
    console.log('jZQA8PeZ :: ')
    myPlacemark.properties.set('iconCaption', 'поиск...');
    maps.geocode(coords).then(res => {
      console.log('3rTl1Z23 :: ', res)
      const firstGeoObject = res.geoObjects.get(0);

      myPlacemark.properties
        .set({
          // Forming a string with the object's data.
          iconCaption: [
            // The name of the municipality or the higher territorial-administrative formation.
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            // Getting the path to the toponym; if the method returns null, then requesting the name of the building.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
          ].filter(Boolean).join(', '),
          // Specifying a string with the address of the object as the balloon content.
          balloonContent: firstGeoObject.getAddressLine()
        });

      this.geocode(firstGeoObject);
    });
  }

  geocode(obj) {
    this.mapError = '';
    this.mapValue = '';

    if (obj) {
      // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
      switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
        case 'exact':
          break;
        case 'number':
        case 'near':
        case 'range':
          this.mapError = 'Неточный адрес, требуется уточнение';
          break;
        case 'street':
          this.mapError = 'Неполный адрес, требуется уточнение';
          break;
        case 'other':
        default:
          this.mapError = 'Неточный адрес, требуется уточнение';
      }
    } else {
      this.mapError = 'Адрес не найден';
    }

    if (!this.mapError) {
      this.mapValue = obj.getAddressLine();
    }
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  onClickSave() {
    this.navCtrl.back();
  }

  onClick(title?: string, code?: FilterType, isCheckboxModal?: boolean) {
    if (isCheckboxModal) {
      this.settingControllerService.setCheckboxModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
        if (!x?.data || isEmpty(x?.data)) {
          return;
        }

        this.setItemsByCode(code, x.data);
      });

      return;
    }

    this.settingControllerService.setSelectModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
      if (!x?.data || isEmpty(x?.data)) {
        return;
      }

      this.setItemsByCode(code, [x.data]);
    });
  }

  getItemsByCode(code: FilterType) {
    switch (code) {
      case FilterType.CITY:
        return this.selectedCity;
      case FilterType.GENDER_TYPE:
        return this.selectedGenderType;
      case FilterType.APARTMENT_CONDITIONS:
        return this.selectedApartmentConditions;
      case FilterType.APARTMENT_FURNITURE:
        return this.selectedApartmentFurniture;
      case FilterType.APARTMENT_FACILITIES:
        return this.selectedApartmentFacilities;
      case FilterType.APARTMENT_BATHROOM_TYPES:
        return this.selectedApartmentBathroomTypes;
      case FilterType.APARTMENT_FURNITURE_STATUSES:
        return this.selectedApartmentFurnitureStatuses;
      case FilterType.APARTMENT_BATHROOMS:
        return this.selectedApartmentBathrooms;
      case FilterType.APARTMENT_SECURITIES:
        return this.selectedApartmentSecurities;
      case FilterType.WINDOW_DIRECTIONS:
        return this.selectedWindowDirections;
      case FilterType.APARTMENT_FOR:
        return this.selectedApartmentFor;
    }
  }

  setItemsByCode(code: FilterType, values: Item[]) {
    switch (code) {
      case FilterType.CITY:
        this.selectedCity = values;
        return;
      case FilterType.GENDER_TYPE:
        this.selectedGenderType = values;
        return;
      case FilterType.APARTMENT_CONDITIONS:
        this.selectedApartmentConditions = values;
        return;
      case FilterType.APARTMENT_FURNITURE:
        this.selectedApartmentFurniture = values;
        return;
      case FilterType.APARTMENT_FACILITIES:
        this.selectedApartmentFacilities = values;
        return;
      case FilterType.APARTMENT_BATHROOM_TYPES:
        this.selectedApartmentBathroomTypes = values;
        return;
      case FilterType.APARTMENT_FURNITURE_STATUSES:
        this.selectedApartmentFurnitureStatuses = values;
        return;
      case FilterType.APARTMENT_BATHROOMS:
        this.selectedApartmentBathrooms = values;
        return;
      case FilterType.APARTMENT_SECURITIES:
        this.selectedApartmentSecurities = values;
        return;
      case FilterType.WINDOW_DIRECTIONS:
        this.selectedWindowDirections = values;
        return;
      case FilterType.APARTMENT_FOR:
        this.selectedApartmentFor = values;
        return;
    }
  }

}
