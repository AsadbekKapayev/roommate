import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubSink} from "../../shares/SubSink";
import {makeId} from "../../shares/cores/util-method";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {

  @Input() controlName: string = '';
  @Input() error: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'tel' | 'password' | 'text' | 'number' | 'sms-code' | 'email' | 'textarea';
  @Input() value: any;
  @Input() whiteBackground: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() enterPressed = new EventEmitter();
  @Output() blur = new EventEmitter();

  subSink = new SubSink();

  id = makeId(10);
  focus: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  valueChanged($event: string) {
    if ($event != null && $event !== '') {
      this.focus = true;
    }
    this.valueChange.emit($event);
  }

  checkFocus() {
    this.focus = this.value != null && this.value !== '';

    this.blur.emit();
  }

}
