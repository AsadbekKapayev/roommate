import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'customMessageDate'})
export class CustomMessageDatePipe implements PipeTransform {

  constructor() {
  }

  transform(value: Date): string {
    if (value == null) {
      return '';
    }

    if (this.getDays(new Date()) === this.getDays(new Date(value))) {
      return new DatePipe('ru').transform(value, 'HH:mm');
    }


    return new DatePipe('ru').transform(value, 'dd.MM.yyyy');
  }

  getDays(date: Date) {
    return date.getDate() * (date.getMonth() + 1) * date.getFullYear();
  }

}
