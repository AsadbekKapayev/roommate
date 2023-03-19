import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {NavController} from "@ionic/angular";
import {ALL_URL} from "../shares/url-static";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private navCtrl: NavController,
              private authService: AuthService) { }

  login(phoneNumber: string) {
    this.authService.setPhoneNumber(phoneNumber);
    this.navCtrl.navigateForward(ALL_URL.SMS).then();
  }

}
