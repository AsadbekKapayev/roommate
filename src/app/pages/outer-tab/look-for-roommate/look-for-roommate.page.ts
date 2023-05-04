import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonRefresher, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {filter, take} from "rxjs";
import {isEmpty} from "../../../shares/cores/util-method";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {FilterService} from "../../../services/common/filter.service";

@Component({
  selector: 'app-look-for-roommate',
  templateUrl: './look-for-roommate.page.html',
  styleUrls: ['./look-for-roommate.page.scss'],
})
export class LookForRoommatePage implements OnInit {

  title: string;
  roommates: Ad[];

  pageStart: number = 1;
  pageEnd: number;

  @ViewChild('ionRefresher') ionRefresher: IonRefresher;
  @ViewChild('adsInfiniteScroll') adsInfiniteScroll: IonInfiniteScroll;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private settingControllerService: SettingControllerService,
              private filterService: FilterService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  initAds() {
    this.adService.loadRoommates(this.pageStart).pipe(
      take(1)
    ).subscribe(x => {
      this.roommates = x.data;
      this.pageStart++;
      this.pageEnd = x.last_page;
    });

    this.ionRefresher?.complete().then();
  }

  loadMore() {
    this.adService.loadRoommates(this.pageStart).pipe(
      take(1),
      filter(() => this.pageStart < this.pageEnd)
    ).subscribe(x => {
      this.roommates?.push(...x.data);
      this.pageStart++;
      this.pageEnd = x.last_page;
    });

    this.adsInfiniteScroll?.complete().then();
  }

  onFilterClicked() {
    this.settingControllerService.setFilterModal().present().then(x => {
      if (!x?.data || isEmpty(x?.data)) {
        return;
      }

      this.adService.loadByFilter(this.filterService.filter).pipe(
        take(1),
      ).subscribe(x => {
        this.roommates = x?.result?.data;
        this.pageStart = 1;
        this.pageEnd = x?.result?.last_page;
      })
    });
  }

}
