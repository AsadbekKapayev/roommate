import {Component, Input} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../shares/url-static";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  constructor(private navCtrl: NavController) {
  }

  @Input() name?: string;
  phoneNumber: any = '';

  navigate() {
    this.navCtrl.navigateForward(ALL_URL.LOGIN).then();
  }

  goToSms() {

  }
}
