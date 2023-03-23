import { Component } from '@angular/core';

export class IonicTab {
  id: string;
  title: string;
  icon: string;
  icon2?: string;
  selected: boolean;
  route: string;
}

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
      route: 'home'
    },
    {
      id: '2',
      title: 'Избранное',
      icon: 'assets/icon/fav.svg',
      icon2: 'assets/icon/fav-black.svg',
      selected: false,
      route: 'favourites'
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
      route: 'guide'
    },
    {
      id: '5',
      title: 'Профиль',
      icon: 'assets/icon/profile.svg',
      icon2: 'assets/icon/profile-black.svg',
      selected: false,
      route: 'profile'
    },
  ]

  constructor() {}

  ionTabsWillChange(event: any) {
    this.tabs.forEach((tab: IonicTab) => {
      tab.selected = tab.route === event.tab;
    });
  }

}
