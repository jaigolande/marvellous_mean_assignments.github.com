import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies = [ "Angular" , "Android", "Big data",  "Node JS","Artificial Intelligence"]

  constructor() { }

  ngOnInit() {
  }

}
