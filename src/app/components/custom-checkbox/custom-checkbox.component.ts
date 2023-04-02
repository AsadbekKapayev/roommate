import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent implements OnInit {

  @Input() title: string;
  @Input() checked = false;

  @Output() checkedChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  dismiss() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
