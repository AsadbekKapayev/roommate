import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'priceCurrency'
})
export class PriceCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return '';
    }

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₸';
  }

}
