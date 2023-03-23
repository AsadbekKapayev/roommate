import { Component } from '@angular/core';
import {IonicTab} from "../../models/core/IonicTab";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabs: IonicTab[] = [
    {
      id: '1',
      title: 'Главная',
      icon: 'assets/icon/home.svg',
      icon2: 'assets/icon/home-black.svg',
      selected: false,
      route: 'home-tab'
    },
    {
      id: '2',
      title: 'Избранное',
      icon: 'assets/icon/fav.svg',
      icon2: 'assets/icon/fav-black.svg',
      selected: false,
      route: 'favourites-tab'
    },
    {
      id: '3',
      title: 'Добавить',
      icon: 'assets/icon/add.svg',
      selected: false,
      route: 'add'
    },
    {
      id: '4',
      title: 'Гид',
      icon: 'assets/icon/guide.svg',
      icon2: 'assets/icon/guide-black.svg',
      selected: false,
      route: 'guide-tab'
    },
    {
      id: '5',
      title: 'Профиль',
      icon: 'assets/icon/profile.svg',
      icon2: 'assets/icon/profile-black.svg',
      selected: false,
      route: 'profile-tab'
    },
  ]

  constructor() {}

  ionTabsWillChange(event: any) {
    this.tabs.forEach((tab: IonicTab) => {
      tab.selected = tab.route === event.tab;
    });
  }

}
