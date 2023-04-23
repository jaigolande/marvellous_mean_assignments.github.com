import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMultiply'
})
export class MyMultiplyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * args[0];
  }

}
