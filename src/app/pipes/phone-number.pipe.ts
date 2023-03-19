import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phoneNumber'})
export class PhoneNumberPipe implements PipeTransform {

  constructor() {
  }

  transform(phoneNumber: string): string {
    let result = '';

    if (!phoneNumber || phoneNumber.length !== 10) {
      return '';
    }

    result += '+7 (' + phoneNumber.slice(0, 3) + ')';
    result += ' ' + phoneNumber.slice(3, 6);
    result += ' ' + phoneNumber.slice(6, 8);
    result += ' ' + phoneNumber.slice(8, 10);

    return result;
  }
}
