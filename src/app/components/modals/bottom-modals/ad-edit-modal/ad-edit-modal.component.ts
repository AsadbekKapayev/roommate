import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {AdType} from "../../../../models/commons/ad/AdType";
import {AdService} from "../../../../services/common/ad.service";
import {filter, interval, switchMap, take} from "rxjs";
import {ALL_URL} from "../../../../shares/url-static";
import {ToastService} from "../../../../services/core/toast.service";

@Component({
  selector: 'app-ad-edit-modal',
  templateUrl: './ad-edit-modal.component.html',
  styleUrls: ['./ad-edit-modal.component.scss'],
})
export class AdEditModalComponent implements OnInit {

  @Input() adId: number;
  @Input() adType: AdType;

  constructor(private navCtrl: NavController,
              private adService: AdService,
              private toastService: ToastService,
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  onClickEdit() {
    if (this.adType === AdType.ROOM) {
      this.navCtrl.navigateForward(ALL_URL.CREATE_AD + this.adId).then();
    }

    if (this.adType === AdType.ROOMMATE) {
      this.navCtrl.navigateForward(ALL_URL.CREATE_AD_ROOM + this.adId).then();
    }

    this.modalService.dismiss(true);
  }

  onClickDelete() {
    const delayTime = 2000;
    let resetClicked = false;
    let ad$;

    this.toastService.presentButton('Объявление удалено', () => {
      resetClicked = true;
    }, delayTime).then()

    if (this.adType === AdType.ROOM) {
      ad$ = this.adService.deleteSearchAd(this.adId);
    }

    if (this.adType === AdType.ROOMMATE) {
      ad$ = this.adService.deleteAd(this.adId);
    }

    interval(delayTime).pipe(
      take(1),
      filter(() => !resetClicked),
      switchMap(() => ad$),
    ).subscribe();

    this.modalService.dismiss();
  }

}
