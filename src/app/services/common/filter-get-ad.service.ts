import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterGetAdService {

  searchText$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  city$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  priceTo$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  priceFrom$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  roomsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  roommatesCount$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  bathroomsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  balconiesCount$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  loggiasCount$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  floor$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  floorFrom$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  squareGeneral$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  squareKitchen$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  squareLiving$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  adGenderType$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  reset() {
    this.searchText$.next(null);
    this.city$.next(null);
    this.priceTo$.next(null);
    this.priceFrom$.next(null);
    this.roomsCount$.next(null);
    this.roommatesCount$.next(null);
    this.bathroomsCount$.next(null);
    this.balconiesCount$.next(null);
    this.loggiasCount$.next(null);
    this.floor$.next(null);
    this.floorFrom$.next(null);
    this.squareGeneral$.next(null);
    this.squareKitchen$.next(null);
    this.squareLiving$.next(null);
    this.adGenderType$.next(null);
  }

}
