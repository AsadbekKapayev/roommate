import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/login.service";
import {IonicButton} from "../../../models/core/IonicButton";
import {IonicTab} from "../../../models/core/IonicTab";

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
  ]

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
