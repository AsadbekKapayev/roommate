import {Injectable} from "@angular/core";
import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class TestController {

  constructor(private httpService: HttpService) {
    // this.httpService = this.httpService.setPrefix(environment.url);
  }

  loadGenders(): Observable<any> {
    return this.httpService.get('/genders', {})
      .pipe(map((value) => value.body as any));
  }

}
