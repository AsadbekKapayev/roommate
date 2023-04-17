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
  @Input() error: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'tel' | 'password' | 'text' | 'number' | 'email' | 'textarea';
  @Input() value: any;
  @Input() whiteBackground: boolean = false;
  @Input() icon: 'currency';

  @Output() valueChange = new EventEmitter<any>();
  @Output() enterPressed = new EventEmitter();
  @Output() blur = new EventEmitter();

  subSink = new SubSink();

  hidePassword: boolean = true;
  isPassword = false;

  id = makeId(10);
  focus: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isPassword = this.type === 'password';
  }

  valueChanged(val: string) {
    if (val != null && val !== '') {
      this.focus = true;
    }
    this.valueChange.emit(val);
  }

  checkFocus() {
    this.focus = this.value != null && this.value !== '';

    this.blur.emit();
  }

  maskFilled() {
    this.valueChanged(this.value);
  }

  changePasswordType() {
    this.hidePassword = !this.hidePassword;
    this.type = this.hidePassword ? 'password' : 'text';
  }

}
