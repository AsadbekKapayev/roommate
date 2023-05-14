import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {AdType} from "../../../../models/commons/ad/AdType";
import {AdService} from "../../../../services/common/ad.service";
import {take} from "rxjs";
import {ALL_URL} from "../../../../shares/url-static";

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
              private modalService: ModalService) {
  }

  ngOnInit() {
  }

  onClickEdit() {
    if (this.adType === AdType.ROOM) {
      this.navCtrl.navigateForward(ALL_URL.CREATE_AD_ROOM + this.adId).then();
    }

    if (this.adType === AdType.ROOMMATE) {
      this.navCtrl.navigateForward(ALL_URL.CREATE_AD + this.adId).then();
    }

    this.modalService.dismiss(true);
  }

  onClickDelete() {
    if (this.adType === AdType.ROOM) {
      this.adService.deleteAd(this.adId).pipe(
        take(1)
      ).subscribe();
    }

    if (this.adType === AdType.ROOMMATE) {
      this.adService.deleteSearchAd(this.adId).pipe(
        take(1)
      ).subscribe();
    }

    this.modalService.dismiss(true);
  }

}
