import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AdService} from "../../../services/common/ad.service";

@Component({
  selector: 'app-confi',
  templateUrl: './confi.page.html',
  styleUrls: ['./confi.page.scss'],
})
export class ConfiPage implements OnInit, OnDestroy {

  constructor(private navCtrl: NavController,
              private adService: AdService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
