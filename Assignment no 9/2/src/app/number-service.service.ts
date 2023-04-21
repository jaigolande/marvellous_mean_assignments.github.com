import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  constructor() { }

  CheckPrime(num: number) {
    var i = 0;
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        break;
      }

    }
    console.log(i);

    return i == num ? " prime " : " not prime"
  }
}
