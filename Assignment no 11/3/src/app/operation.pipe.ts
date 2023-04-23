import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operation'
})
export class OperationPipe implements PipeTransform {
  str = ''

  transform(value: number, operator: any): any {
    switch (operator) {
      case 'odd':
        return value % 2 != 0 ? 'odd' : 'not odd'
      case 'even':
        return value % 2 == 0 ? 'even' : 'not even'
      case 'prime':
        let i = 0;
        for (i = 2; i < value; i++) {
          if (value % i == 0) {
            return 'not prime'
          }
        }
        return 'prime'
      case 'perfect':
        let sum = 0;
        for (let i = 1; i < value; i++) {
          if (value % i == 0) {
            sum += i
          }
        }
        return sum == value ? 'perfect' : 'not prefect'
      default:
        return 'invalid selection'
    }

    // return null;
  }

}
