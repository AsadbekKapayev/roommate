import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AdService} from "../../../services/common/ad.service";
import {AuthService} from "../../../services/core/auth.service";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";
import {ProfileService} from "../../../services/core/profile.service";
import {ALL_URL} from "../../../shares/url-static";

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit, OnDestroy {

  email: string;
  isUserVerified = true;

  constructor(private navCtrl: NavController,
              private authService: AuthService,
              private route: ActivatedRoute,
              private profileService: ProfileService,
              private adService: AdService) {
  }

  ngOnInit() {
    this.email = this.route.snapshot?.params?.email;

    this.authService.emailVerification().pipe(
      take(1)
    ).subscribe();
  }

  ngOnDestroy(): void {
  }

  check() {
    this.profileService.loadNewUser().pipe(
      take(1)
    ).subscribe(x => {
      // todo check email
      this.isUserVerified = !!x?.email_verified_at;
      this.navCtrl.navigateForward(ALL_URL.TAB_HOME).then();
    })
  }

}
