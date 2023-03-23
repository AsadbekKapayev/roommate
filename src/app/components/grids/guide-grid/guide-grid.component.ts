import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";
import {GuideItem} from "../../../models/commons/GuideItem";

@Component({
  selector: 'app-guide-grid',
  templateUrl: './guide-grid.component.html',
  styleUrls: ['./guide-grid.component.scss'],
})
export class GuideGridComponent implements OnInit {

  @Input() guides: GuideItem[];

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }
}
