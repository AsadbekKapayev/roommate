import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/core/auth.service";
import {NavController} from "@ionic/angular";
import {SettingControllerService} from "../services/controllers/setting-controller.service";
import {TokenService} from "../services/common/token.service";
import {ALL_URL} from "../shares/url-static";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService,
              private navCtrl: NavController,
              private tokenService: TokenService,
              private settingControllerService: SettingControllerService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenService.getToken()?.length) {
      return true;
    }

    this.navCtrl.navigateForward(ALL_URL.LOGIN).then();

    // this.settingControllerService.setCityAlmatyModal().present().then(x => {
    //   if (x?.data !== undefined && !x?.data) {
    //     this.settingControllerService.setCityModal().present().then();
    //   }
    //
    //   this.authService.token = 'J85QIBd0';
    // });
    //
    // return true;
  }

}

