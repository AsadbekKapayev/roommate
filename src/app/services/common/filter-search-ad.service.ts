import {Injectable} from "@angular/core";
import {FilterController} from "../../controllers/FilterController";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterSearchAdService {

  city$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  city$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

}
