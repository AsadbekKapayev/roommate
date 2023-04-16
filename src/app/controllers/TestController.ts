import {Injectable} from "@angular/core";
import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {Item} from "../models/commons/Item";

@Injectable({
  providedIn: 'root'
})
export class TestController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  loadGenders(): Observable<Item[]> {
    return this.httpService.get('/genders', {})
      .pipe(map((value) => value.body.data[0] as Item[]));
  }

}
