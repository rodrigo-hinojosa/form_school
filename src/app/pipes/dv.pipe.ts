import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dv'
})
export class DvPipe implements PipeTransform {

  transform(value: any): any {

    value = value.replace(/\./g, ''); // replace "." for with nothing

    value = value.replace(/^\D+/g, ''); // replace all leading non-digits with nothing

    if (value === '') {

      return '';

    } else {

      let M = 0, S = 1;
      for (; value; value = Math.floor(value / 10))
        S = (S + value % 10 * (9 - M++ % 6)) % 11;
      return String(S ? S - 1 : 'K');

    }

  }

}
