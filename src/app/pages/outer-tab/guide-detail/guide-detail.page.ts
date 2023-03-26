import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginService} from "../../../services/core/login.service";
import {ActivatedRoute} from "@angular/router";
import {GuideService} from "../../../services/common/guide.service";
import {GuideItem} from "../../../models/commons/GuideItem";

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.page.html',
  styleUrls: ['./guide-detail.page.scss'],
})
export class GuideDetailPage implements OnInit {

  guide: GuideItem;
  guides: GuideItem[];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private guideService: GuideService) {
  }

  ngOnInit() {
    this.initGuideDetails();
  }

  initGuideDetails() {
    const guideId = this.route.snapshot?.params?.id;

    this.guide = this.guideService.loadGuideById(guideId);
    this.guides = this.guideService.loadGuidesOther(guideId);
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }
}
