import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ALL_URL} from "../../../shares/url-static";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.pages.scss'],
})
export class SmsPage implements OnInit {

  phoneNumber = '+7 747 123 12 31';

  one: string;
  two: string;
  three: string;
  four: string;

  @ViewChildren('input') listInput: QueryList<any>;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  changeNumber() {
    this.navCtrl.navigateBack(ALL_URL.LOGIN).then();
  }

  moveFocus(event, index: number) {
    if (event.target.value.length < 1) {
      if (index !== 0) {
        this.listInput.get(index - 1).nativeElement.focus();
      }
    } else if (event.target.value.length > 0) {
      if (index === 3) {
        // this.smsConfirmation().then();
      } else {
        this.listInput.get(index + 1).nativeElement.focus();
      }
    } else {
      return 0;
    }
  }

}
