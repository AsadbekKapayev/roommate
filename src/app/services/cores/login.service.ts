import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService,) { }

  login(phoneNumber: string) {
    this.authService.setPhoneNumber(phoneNumber);
  }

}
