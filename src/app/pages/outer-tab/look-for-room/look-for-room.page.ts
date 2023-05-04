import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonRefresher, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {filter, take} from "rxjs";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {isEmpty} from "../../../shares/cores/util-method";
import {FilterService} from "../../../services/common/filter.service";

@Component({
  selector: 'app-look-for-room',
  templateUrl: './look-for-room.page.html',
  styleUrls: ['./look-for-room.page.scss'],
})
export class LookForRoomPage implements OnInit {

  title: string;
  ads: Ad[];

  pageStart: number = 1;
  pageEnd: number;

  @ViewChild('ionRefresher') ionRefresher: IonRefresher;
  @ViewChild('adsInfiniteScroll') adsInfiniteScroll: IonInfiniteScroll;

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private filterService: FilterService,
              private settingControllerService: SettingControllerService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.initAds();
  }

  onClickBackIcon() {
    this.navCtrl.back();
  }

  initAds() {
    this.adService.loadRooms(this.pageStart).pipe(
      take(1)
    ).subscribe(x => {
      this.ads = x.data;
      this.pageStart++;
      this.pageEnd = x.last_page;
    });

    this.ionRefresher?.complete().then();
  }

  loadMore() {
    this.adService.loadRooms(this.pageStart).pipe(
      take(1),
      filter(() => this.pageStart < this.pageEnd)
    ).subscribe(x => {
      this.ads?.push(...x.data);
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
        this.ads = x?.result?.data;
        this.pageStart = 1;
        this.pageEnd = x?.result?.last_page;
      })
    });
  }
}
