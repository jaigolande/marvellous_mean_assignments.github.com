import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() emitValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToParent(v: HTMLInputElement){
    console.log(v.value);
    this.emitValue.emit(v.value)


  }

}
