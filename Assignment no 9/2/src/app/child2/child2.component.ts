import { Component, OnInit } from '@angular/core';
import { StringServiceService } from '../string-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  str1 = "JaiShriRam"
  upperCase = 0
  constructor(private stringService : StringServiceService) { }

  ngOnInit() {
    this.upperCase=this.stringService.CapitalLetter(this.str1)  ;  

}
}
