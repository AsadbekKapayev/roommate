import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({name: 'customDate'})
export class CustomDatePipe implements PipeTransform {

  constructor() {
  }

  transform(value: Date, format?: 'dd MMMM yyyy' | 'dd.MM.yyyy'): string {
    if (value == null) {
      return '';
    }

    if (format == null) {
      format = 'dd.MM.yyyy';
    }

    if (this.getDays(new Date()) === this.getDays(new Date(value))) {
      return 'Сегодня, ' + new DatePipe('ru').transform(value, 'HH:mm');
    }


    return new DatePipe('ru').transform(value, format);
  }

  getDays(date: Date) {
    return date.getDate() * (date.getMonth() + 1) * date.getFullYear();
  }

}
