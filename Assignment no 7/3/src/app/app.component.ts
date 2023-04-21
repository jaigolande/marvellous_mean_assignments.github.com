import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = "Marvellous Infosystem"

  fun(){
    this.displayText = "Educating for better tomorrow"
  }
}
