import {Component, Input, OnInit} from '@angular/core';
import {Item} from 'app/models/commons/Item';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
})
export class FilterItemComponent implements OnInit {

  @Input() title: string;
  @Input() asterisks: boolean;
  @Input() selectedItems: Item[];

  constructor() {
  }

  ngOnInit() {
  }

}
