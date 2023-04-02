import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {GuideItem} from "../../../models/commons/GuideItem";
import {GuideService} from "../../../services/common/guide.service";
import {GuideType} from "../../../models/commons/GuideType";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {

  selectedCategory = 'all';
  categories: IonicButton[] = [
    {
      id: 'all',
      title: 'Все статьи',
    },
    {
      id: 'new',
      title: 'Новые',
    },
    {
      id: 'advice',
      title: 'Советы',
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
    this.selectedCategory = category?.id;

    this.guides = this.selectedCategory === 'all' ? this.guideService.loadGuides() :
      this.selectedCategory === 'new' ? this.guideService.loadByCategory(GuideType.NEW) :
        this.selectedCategory === 'advice' ? this.guideService.loadByCategory(GuideType.ADVICE) : null;
  }

}
