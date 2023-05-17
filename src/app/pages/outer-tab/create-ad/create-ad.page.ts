import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {AdService} from "../../../services/common/ad.service";
import ymaps from 'ymaps';
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {FilterType} from "../../../models/commons/ad/FilterType";
import {Item} from "../../../models/commons/Item";
import {getId, getIds, isEmpty, toArray} from "../../../shares/cores/util-method";
import {ProfileService} from "../../../services/core/profile.service";
import {take} from 'rxjs';
import {User} from "../../../models/commons/user/User";
import {ToastService} from "../../../services/core/toast.service";
import {SearchAdStore} from "../../../models/commons/ad/SearchAdStore";
import {ImageService, LocalFile} from "../../../services/common/image.service";
import {SubSink} from "../../../shares/SubSink";
import {FilterService} from "../../../services/common/filter.service";

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  styleUrls: ['./create-ad.page.scss'],
})
export class CreateAdPage implements OnInit, OnDestroy {

  searchAdStore: SearchAdStore;
  user: User;

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
  coords: string;

  saveButtonClicked = false;
  profileImages: LocalFile[] = [];
  images: File[];

  subSink = new SubSink();
  adId: string;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private settingControllerService: SettingControllerService,
              private profileService: ProfileService,
              private toastService: ToastService,
              private route: ActivatedRoute,
              private filterService: FilterService,
              private imageService: ImageService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.adId = this.route.snapshot?.params?.id;
    this.imageService.clearData();
    this.searchAdStore = new SearchAdStore();

    if (this.adId) {
      this.initAdDetail(this.adId);
    } else {
      this.loadMap(toArray('43.237163,76.945627', ','), '').then();
    }

    this.profileService.loadUser().pipe(
      take(1)
    ).subscribe(x => {
      this.user = x;
    });

    this.subSink.sink = this.imageService.images$.subscribe(x => {
      this.profileImages = x;
    })
  }

  ngOnDestroy(): void {
    this.imageService.clearData();
    this.subSink.unsubscribe();
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

        let myPlacemark;

        if (this.adId) {
          myPlacemark = this.createPlacemark(maps, location, coords);
          map.geoObjects.add(myPlacemark);
        }

        map.events.add('click', (e) => {
          const coords = e.get('coords');

          if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
          } else {
            myPlacemark = this.createPlacemark(maps, location, coords);
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

  createPlacemark(maps, location, coords) {
    return new maps.Placemark(coords, {
      iconCaption: location ? location : 'поиск...'
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

  getAddress(maps, myPlacemark, coords) {
    const [a, b] = coords;
    this.coords = a + ',' + b;

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

  onClickAddImage() {
    this.imageService.selectImage();
  }

  async onClickSave() {
    this.saveButtonClicked = true;
    this.images = await this.getImagesFiles();

    if (
      !this.selectedCity?.length ||
      !this.user ||
      !this.user.email ||
      !this.user.name ||
      !this.user.phone_number ||
      !this.coords ||
      !this.searchAdStore ||
      !this.searchAdStore.description ||
      !this.searchAdStore.price ||
      !this.searchAdStore.roommate_count ||
      !this.searchAdStore.rooms_count ||
      !this.searchAdStore.square_general ||
      !this.mapValue ||
      !this.images?.length
    ) {
      return;
    }

    this.searchAdStore = {
      city_id: getId(this.selectedCity),
      price_com: this.searchAdStore.price_com,
      price_pledge: this.searchAdStore.price_pledge,
      floor: this.searchAdStore.floor,
      floor_from: this.searchAdStore.floor_from,
      contact_email: this.user?.email,
      contact_name: this.user?.name,
      phone_number: this.user?.phone_number,
      coordinates: this.coords,
      description: this.searchAdStore?.description,
      location: this.mapValue,
      price: this.searchAdStore?.price,
      balconies_count: this.searchAdStore?.balconies_count,
      bathroom_count: this.searchAdStore?.bathroom_count,
      loggias_count: this.searchAdStore?.loggias_count,
      roommate_count: this.searchAdStore?.roommate_count,
      rooms_count: this.searchAdStore?.rooms_count,
      square_general: this.searchAdStore?.square_general,
      square_kitchen: this.searchAdStore?.square_kitchen,
      apartment_condition_id: getId(this.selectedApartmentConditions),
      gender_type: getId(this.selectedGenderType),
      apartmentFurnitureStatus: getId(this.selectedApartmentFurnitureStatuses),
      apartmentFurniture: getIds(this.selectedApartmentFurniture),
      apartmentFacilities_ids: getIds(this.selectedApartmentFacilities),
      apartmentBathrooms_ids: getIds(this.selectedApartmentBathrooms),
      apartmentBathroomTypes_ids: getIds(this.selectedApartmentBathroomTypes),
      apartmentSecurities_ids: getIds(this.selectedApartmentSecurities),
      windowDirections: getIds(this.selectedWindowDirections),
      apartmentFor_ids: getIds(this.selectedApartmentFor),
    } as SearchAdStore;

    this.adService.searchAdStore(this.searchAdStore, this.images).pipe(
      take(1),
    ).subscribe((x) => {
      this.toastService.present('Объявление сохранена')
      this.navCtrl.back();
    });
  }

  initAdDetail(adId: string) {

    this.adService.loadRoomById(adId).pipe(
      take(1)
    ).subscribe(async x => {
      this.loadMap(toArray(x?.coordinates, ','), x?.location).then();
      if (!x) {
        return;
      }

      this.coords = x?.coordinates;
      this.mapValue = x?.location;
      this.searchAdStore.price = x.price;
      this.searchAdStore.price_from = x.price_from;
      this.searchAdStore.rooms_count = x.rooms_count;
      this.searchAdStore.roommate_count = x.roommate_count;
      this.searchAdStore.description = x.description;
      this.selectedCity = await this.filterService.loadCityById(x.city_id);
      this.selectedGenderType = await this.filterService.loadGenderTypeById(x.ad_gender_type_id)

      this.user = x.user;
    })
  }

  onClick(title?: string, code?: FilterType, isCheckboxModal?: boolean) {
    if (isCheckboxModal) {
      this.settingControllerService.setCheckboxModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
        this.setItemsByCode(code, x.data);
      });
      return;
    }

    this.settingControllerService.setSelectModal(title, code, this.getItemsByCode(code)).presentSecondary().then(x => {
      if (isEmpty(x.data)) {
        this.setItemsByCode(code, []);
        return;
      }

      this.setItemsByCode(code, [x.data]);
    });
  }

  async getImagesFiles() {
    const blobs: File[] = [];

    for (let i = 0; i < this.profileImages?.length; i++) {
      const response = await fetch(this.profileImages[i]?.data);
      const blob = await response?.blob();
      const file = new File([blob], (this.profileImages[i]?.name), {
        type: blob.type,
      });

      blobs.push(file);
    }

    return blobs;
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

  removeImage(image: LocalFile) {
    this.imageService.deleteImage(image);
  }

}
