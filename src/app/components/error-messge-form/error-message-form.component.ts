import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-error-message-form',
  templateUrl: './error-message-form.component.html',
  styleUrls: ['./error-message-form.component.scss'],
})
export class ErrorMessageFormComponent implements OnInit {

  @ViewChild('error',
    {
      read: ElementRef,
      static: true
    }) error: ElementRef;
  @ViewChild('hidden',
    {
      read: ElementRef,
      static: true
    }) hidden: ElementRef;

  @Input()
  public set setErrorMessage(value: any) {
    if (value) {
      this.errorMessage = value.trim();
      this.showError();
    } else {
      this.hideError();
    }
  }

  errorMessage: string;

  constructor() {
  }

  ngOnInit() {
  }

  private showError() {
    setTimeout(() => {
      this.error.nativeElement.classList.add('active');
      this.error.nativeElement.style.maxHeight = `${this.hidden.nativeElement.offsetHeight}px`;
    });
  }

  private hideError() {

    this.error.nativeElement.classList.remove('active');
    this.error.nativeElement.style.maxHeight = `${0}px`;
  }


}
