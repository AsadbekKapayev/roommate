import {Injectable} from "@angular/core";
import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {UserWithToken} from "../models/commons/user/UserWithToken";
import {Item} from "../models/commons/Item";

@Injectable({
  providedIn: 'root'
})
export class ProfileController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  sendOtpCode(name: string,): Observable<any> {
    return this.httpService.post('/OTPSendCode', {})
      .pipe(map((value) => value.body as any));
  }

  loadGenders(): Observable<Item[]> {
    return this.httpService.get('/genders', {})
      .pipe(map((value) => value.body.data[0] as Item[]));
  }

}
