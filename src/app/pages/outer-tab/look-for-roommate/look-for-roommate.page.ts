import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonRefresher, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {combineLatest, filter, switchMap, take} from "rxjs";
import {isEmpty} from "../../../shares/cores/util-method";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {FilterService} from "../../../services/common/filter.service";
import {Filter} from "../../../models/commons/ad/Filter";
import {FilterGetAdService} from "../../../services/common/filter-get-ad.service";

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
              private filterGetAdService: FilterGetAdService,
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
    this.settingControllerService.setFilterRoommateModal().present().then(x => {
      if (!x?.data || isEmpty(x?.data)) {
        return;
      }

      combineLatest([
        this.filterGetAdService.searchText$,
        this.filterGetAdService.city$,
        this.filterGetAdService.priceTo$,
        this.filterGetAdService.priceFrom$,
        this.filterGetAdService.roomsCount$,
        this.filterGetAdService.roommatesCount$,
        this.filterGetAdService.bathroomsCount$,
        this.filterGetAdService.balconiesCount$,
        this.filterGetAdService.loggiasCount$,
        this.filterGetAdService.floor$,
        this.filterGetAdService.floorFrom$,
        this.filterGetAdService.squareGeneral$,
        this.filterGetAdService.squareKitchen$,
        this.filterGetAdService.squareLiving$,
        this.filterGetAdService.adGenderType$,
      ]).pipe(
        take(1),
        switchMap(x => {
          return this.adService.loadGetAdByFilter({
            search_text: x[0],
            city_id: x[1],
            price_to: x[2],
            price_from: x[3],
            rooms_count: x[4],
            roommate_count: x[5],
            bathrooms_count: x[6],
            balconies_count: x[7],
            loggias_count: x[8],
            floor: x[9],
            floor_from: x[10],
            square_general: x[11],
            square_kitchen: x[12],
            square_living: x[13],
            ad_gender_type_id: x[14],
          } as Filter);
        })
      ).subscribe(x => {
        this.roommates = x?.result?.data;
        this.pageStart = 1;
        this.pageEnd = x?.result?.last_page;
      });
    });
  }

  onAdGetLikeClicked(ad: Ad) {
    this.adService.adGetLike(ad.id).pipe(
      take(1),
    ).subscribe();
  }

}
