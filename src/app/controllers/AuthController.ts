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

  register(name: string, email: string, gender_id: number, password: string, password_confirmation: string): Observable<UserWithToken> {
    return this.httpService.post('/register/email', {
      name: name,
      email: email,
      gender_id: gender_id,
      password: password,
      password_confirmation: password_confirmation
    }).pipe(map((value) => value.body.data as UserWithToken));
  }

  loginEmail(email: string, password: string): Observable<UserWithToken> {
    return this.httpService.post('/login/email', {
      email: email,
      password: password,
    }).pipe(map((value) => value.body.data as UserWithToken));
  }

  logout(): Observable<any> {
    return this.httpService.post('/logout', {})
      .pipe(map((value) => value.body as any));
  }

  emailVerification(): Observable<any> {
    return this.httpService.get('/user/resend/email/verification', {})
      .pipe(map((value) => value.body as any));
  }

}
