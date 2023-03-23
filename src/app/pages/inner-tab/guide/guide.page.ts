import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {IonicTab} from "../../../models/core/IonicTab";
import {GuideItem} from "../../../models/commons/GuideItem";
import {GuideService} from "../../../services/common/guide.service";

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

  guides: GuideItem[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private guideService: GuideService) {
  }

  ngOnInit() {
    this.guides = this.guideService.loadGuides();
  }

  onClickCategory(category: IonicButton) {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });
  }

}
