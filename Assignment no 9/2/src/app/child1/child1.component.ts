import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  num=19;
  isPrime = ''

  constructor(private numberService : NumberServiceService) { }

  ngOnInit() {
    console.log(this.numberService.CheckPrime(this.num));
    this.isPrime=this.numberService.CheckPrime(this.num)
  }

}
