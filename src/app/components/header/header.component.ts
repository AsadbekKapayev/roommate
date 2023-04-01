import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() showBackButton: boolean;
  @Input() showFiltersButton: boolean;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  onClickFilter() {

  }
}
