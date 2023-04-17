import {Injectable} from "@angular/core";
import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {UserWithToken} from "../models/commons/user/UserWithToken";

@Injectable({
  providedIn: 'root'
})
export class AuthController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  sendOtpCode(phone: string): Observable<any> {
    return this.httpService.post('/OTPSendCode', {phone_number: phone})
      .pipe(map((value) => value.body as any));
  }

  verifyOtpCode(phone: string, code: string): Observable<UserWithToken> {
    return this.httpService.post('/OTPVerifyCode', {phone_number: phone, verification_code: code})
      .pipe(map((value) => value.body.data as UserWithToken));
  }

}
