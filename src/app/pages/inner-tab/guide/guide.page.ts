import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {IonicTab} from "../../../models/core/IonicTab";
import {GuideItem} from "../../../models/commons/GuideItem";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {

  categories: IonicButton[] = [
    {
      id: 'all',
      title: 'Все статьи',
      selected: true,
    },
    {
      id: 'new',
      title: 'Новые',
      selected: false,
    },
    {
      id: 'advice',
      title: 'Советы',
      selected: false,
    },
  ];

  guides: GuideItem[] = [
    {
      id: '1',
      title: 'Guide 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '2',
      title: 'Guide 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '3',
      title: 'Guide 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '4',
      title: 'Guide 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  constructor(private navCtrl: NavController,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });
  }

}
