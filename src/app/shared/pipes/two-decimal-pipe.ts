import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimal'
})
export class TwoDecimalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(2);
  }

}
