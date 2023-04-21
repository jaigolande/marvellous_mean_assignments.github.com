import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringServiceService {

  constructor() { }

  CapitalLetter(str1) {
    let charStr = ''
    let i = 0;
    let upperCase = 0
    while (i < str1.length) {
      charStr = str1.charAt(i)

      if (charStr == charStr.toUpperCase()) {
        upperCase++
      }
      i++
    }
    return upperCase;
  }
}

