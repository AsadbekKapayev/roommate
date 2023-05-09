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


  /*
    init() {
      var myPlacemark,
        myMap = new ymaps.Map('map', {
          center: [43.23533174349779,76.94582796289055],
          zoom: 10
        }, {
          searchControlProvider: 'yandex#search'
        });

      // Слушаем клик на карте.
      myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
          myPlacemark = createPlacemark(coords);
          myMap.geoObjects.add(myPlacemark);
          // Слушаем событие окончания перетаскивания на метке.
          myPlacemark.events.add('dragend', function () {
            getAddress(myPlacemark.geometry.getCoordinates());
          });
        }
        getAddress(coords);
      });

      function geocode() {
        // Забираем запрос из поля ввода.
        var request = $('#location').val();
        // Геокодируем введённые данные.
        ymaps.geocode(request).then(function (res) {
          var obj = res.geoObjects.get(0),
            error, hint;

          if (obj) {
            // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
            switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
              case 'exact':
                break;
              case 'number':
              case 'near':
              case 'range':
                error = 'Неточный адрес, требуется уточнение';
                hint = 'Уточните номер дома';
                break;
              case 'street':
                error = 'Неполный адрес, требуется уточнение';
                hint = 'Уточните номер дома';
                break;
              case 'other':
              default:
                error = 'Неточный адрес, требуется уточнение';
                hint = 'Уточните адрес';
            }
          } else {
            error = 'Адрес не найден';
            hint = 'Уточните адрес';
          }

          // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
          if (error) {
            showError(error);
            showMessage(hint);
          } else {
            showResult(obj);
          }
        }, function (e) {
          console.log(e)
        })

      }
      function showResult(obj) {
        // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
        $('#location').removeClass('is-invalid');
        $('#location').addClass('is-valid');
        $('#location_invalid').removeClass('invalid-feedback');
        $('#location_invalid').addClass('valid-feedback');
        $('#location_invalid').css('display', 'block');
        $('#notice').css('display', 'none');

        var mapContainer = $('#map'),
          bounds = obj.properties.get('boundedBy'),
          // Рассчитываем видимую область для текущего положения пользователя.
          mapState = ymaps.util.bounds.getCenterAndZoom(
            bounds,
            [mapContainer.width(), mapContainer.height()]
          ),
          // Сохраняем полный адрес для сообщения под картой.
          address = [obj.getCountry(), obj.getAddressLine()].join(', '),
          // Сохраняем укороченный адрес для подписи метки.
          shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
        // Убираем контролы с карты.
        mapState.controls = [];
        // Выводим сообщение под картой.
        showMessage(address);
      }

      function showError(message) {
        $('#notice').text(message);
        $('#location').removeClass('is-valid');
        $('#location').addClass('is-invalid');
        $('#location_invalid').removeClass('valid-feedback');
        $('#location_invalid').addClass('invalid-feedback');
        $('#location_invalid').css('display', 'block');
        $('#messageHeader').text('');
        $('#message').text('');
        $('#notice').css('display', 'block');
        // Удаляем карту.
        if (map) {
          map.destroy();
          map = null;
        }
      }

      function createMap(state, caption) {
        // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
        if (!map) {
          map = new ymaps.Map('map', state);
          placemark = new ymaps.Placemark(
            map.getCenter(), {
              iconCaption: caption,
              balloonContent: caption
            }, {
              preset: 'islands#redDotIconWithCaption'
            });
          map.geoObjects.add(placemark);
          // Если карта есть, то выставляем новый центр карты и меняем данные и позицию метки в соответствии с найденным адресом.
        } else {
          map.setCenter(state.center, state.zoom);
          placemark.geometry.setCoordinates(state.center);
          placemark.properties.set({iconCaption: caption, balloonContent: caption});
        }
      }

      function showMessage(message) {
        $('#messageHeader').text('Данные получены:');
        $('#message').text(message);
      }
      // Создание метки.
      function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
          iconCaption: 'поиск...'
        }, {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true
        });
      }

      // Определяем адрес по координатам (обратное геокодирование).
      function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);

          myPlacemark.properties
            .set({
              // Формируем строку с данными об объекте.
              iconCaption: [
                // Название населенного пункта или вышестоящее административно-территориальное образование.
                firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
              ].filter(Boolean).join(', '),
              // В качестве контента балуна задаем строку с адресом объекта.
              balloonContent: firstGeoObject.getAddressLine()
            });
          document.getElementById("coords").value = coords;
          document.getElementById("location").value = myPlacemark.properties._data.balloonContent;
          document.getElementById("location").style = 'visibility: visable';

          geocode();
        });
      }
    }
  */

  /*
    $( "form" ).submit(function( event ) {
      if ( $('#location').hasClass('is-invalid') || !$('#location').val()) {
        var elementClick = "#location_header";
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;

        return false;
      }
      return true;
    });
  */

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
