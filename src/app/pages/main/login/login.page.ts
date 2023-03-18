import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phoneNumber: any = '';

  constructor() {
    console.log('ogn8e294i6 ')
  }

  ngOnInit() {
  }

  goToSms() {

  }
}
