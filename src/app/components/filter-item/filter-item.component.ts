import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonItem} from "../../models/commons/CommonItem";

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
})
export class FilterItemComponent implements OnInit {

  @Input() title: string;
  @Input() items: CommonItem[];
  @Input() selectedItems: CommonItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
