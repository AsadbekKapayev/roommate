import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {makeId} from "../../shares/cores/util-method";
import {SubSink} from "../../shares/SubSink";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit, OnDestroy, AfterViewInit {

  form: FormGroup;
  @Input() controlName: string = '';
  @Input() error: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'tel' | 'password' | 'text' | 'number' | 'sms-code' | 'email' | 'textarea';
  @Input() value: any;
  @Input() whiteBackground: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() enterPressed: EventEmitter<any> = new EventEmitter();
  @Output() blur: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: ElementRef;

  subSink = new SubSink();

  id = makeId(10);
  inputId: string;
  focus: boolean = false;
  readonly: boolean;
  hidePassword: boolean = true;
  isPasswordInput: boolean;

  constructor(private formGroupDirective: FormGroupDirective,
              private fb: FormBuilder) {
    if (this.type === 'tel') {
      this.inputId = 'phoneId' + this.id;
    } else if (this.type === 'sms-code') {
      this.inputId = 'smsCodeId' + this.id;
    } else {
      this.inputId = 'inputId' + this.id;
    }
  }

  ngOnInit() {

    this.isPasswordInput = this.type === 'password';

    if (!this.controlName) {
      this.controlName = 'temp';
    }

    this.form = this.formGroupDirective.form ?? this.fb.group({temp: ['', []]});

    this.subSink.sink = this.form.valueChanges.subscribe(() => {
      this.setRequired();
    });
  }

  private setRequired() {
    if (this.form.controls[this.controlName]?.errors?.required && this.input) {
      this.input.nativeElement.required = true;
      if (!this.label.endsWith('<span style="color: #FF4F60"> * </span>')) {
        this.label += '<span style="color: #FF4F60"> * </span>';
      }
    }
  }

  ngAfterViewInit(): void {
    this.setRequired();
    if (this.readonly) {
      this.input.nativeElement.readonly = true;
    }
  }

  changePhoneNumber($event: string) {
    this.valueChange.emit($event);
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

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

  changePasswordType() {
    this.hidePassword = !this.hidePassword;
    this.type = this.hidePassword ? 'password' : 'text';
  }
}

