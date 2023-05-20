import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonRefresher, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../../services/core/login.service";
import {AdService} from "../../../services/common/ad.service";
import {Ad} from "../../../models/commons/ad/Ad";
import {combineLatest, filter, switchMap, take} from "rxjs";
import {SettingControllerService} from "../../../services/controllers/setting-controller.service";
import {FilterService} from "../../../services/common/filter.service";
import {FilterSearchAdService} from "../../../services/common/filter-search-ad.service";
import {Filter} from "../../../models/commons/ad/Filter";

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
              private filterSearchAdService: FilterSearchAdService,
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

      if (!x?.data || x?.data !== 'search') {
        return;
      }

      combineLatest([
        this.filterSearchAdService.searchText$,
        this.filterSearchAdService.city$,
        this.filterSearchAdService.priceTo$,
        this.filterSearchAdService.priceFrom$,
        this.filterSearchAdService.roomsCount$,
        this.filterSearchAdService.roommatesCount$,
        this.filterSearchAdService.bathroomsCount$,
        this.filterSearchAdService.balconiesCount$,
        this.filterSearchAdService.loggiasCount$,
        this.filterSearchAdService.floor$,
        this.filterSearchAdService.floorFrom$,
        this.filterSearchAdService.squareGeneral$,
        this.filterSearchAdService.squareKitchen$,
        this.filterSearchAdService.squareLiving$,
        this.filterSearchAdService.adGenderType$,
      ]).pipe(
        take(1),
        switchMap(x => {
          return this.adService.loadByFilter({
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
        this.ads = x?.result?.data;
        this.pageStart = 1;
        this.pageEnd = x?.result?.last_page;
      });

    });
  }

  onLikeClicked(ad: Ad) {
    this.adService.adLike(ad.id).pipe(
      take(1),
    ).subscribe();
  }

}
