import { Component, OnInit } from '@angular/core';
import {ArithmeticService} from './../arithmetic.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  num1 = 11;
  num2=10;
  addition: number;
  subtraction  : number;
  
  constructor(private arithmeticService : ArithmeticService) {
      }

      ngOnInit(): void {
        this.addition = this.arithmeticService.Add(this.num1,this.num2)
        this.subtraction = this.arithmeticService.Sub(this.num1,this.num2)

      }


}
