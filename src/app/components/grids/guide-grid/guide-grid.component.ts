import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {GuideItem} from "../../../models/commons/GuideItem";
import {ALL_URL} from "../../../shares/url-static";

@Component({
  selector: 'app-guide-grid',
  templateUrl: './guide-grid.component.html',
  styleUrls: ['./guide-grid.component.scss'],
})
export class GuideGridComponent implements OnInit {

  @Input() guides: GuideItem[];

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  onGuideClicked(guide: GuideItem) {
    this.navCtrl.navigateForward(ALL_URL.GUIDE_DETAIL + guide.id).then();
  }

}
