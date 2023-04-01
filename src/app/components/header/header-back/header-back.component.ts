import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  @Input() title: string = '';
  @Input() showHomeIcon: boolean = false;
  @Input() showBackButton: boolean = false;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
