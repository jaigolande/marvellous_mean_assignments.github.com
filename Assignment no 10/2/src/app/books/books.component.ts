import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookies',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = ["Think and Grow Rich", "How to win friends", "Mindset", "The Alchemist"]

  constructor() { }

  ngOnInit() {
  }

}
