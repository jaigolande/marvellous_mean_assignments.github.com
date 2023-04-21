import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';
import { StringServiceService } from '../string-service.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  num=19;
  isPrime = ''

  str1 = "JaiShriRam"
  upperCase = 0

  constructor(private numberService : NumberServiceService,
    private stringService : StringServiceService) { }

  ngOnInit() {
    this.isPrime=this.numberService.CheckPrime(this.num)

    
    this.upperCase=this.stringService.CapitalLetter(this.str1)  ;  
  }

}
