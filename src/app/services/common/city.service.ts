import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {AdItem} from "../../models/commons/ad/AdItem";
import {CommonItem} from "../../models/commons/CommonItem";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: CommonItem[] = [
    {
      id: '1',
      name: 'Алматы'
    },
    {
      id: '2',
      name: 'Нур-Султан'
    },
    {
      id: '3',
      name: 'Актау'
    },
    {
      id: '4',
      name: 'Актобе'
    },
    {
      id: '5',
      name: 'Аксу'
    },
    {
      id: '6',
      name: 'Караганда'
    },
    {
      id: '7',
      name: 'Павлодар'
    },
    {
      id: '8',
      name: 'Петропавл'
    },
    {
      id: '9',
      name: 'Жезказган'
    },
  ];

  constructor() {
  }

  loadCities() {
    return this.cities;
  }

  loAdCityById(id: string) {
    return this.cities.find(city => city.id === id);
  }

}
