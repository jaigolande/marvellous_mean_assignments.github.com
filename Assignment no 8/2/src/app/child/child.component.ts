import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() msgFromParent ;
  @Output() msgFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.msgFromChild.emit("Hello from Child")
  }

}
