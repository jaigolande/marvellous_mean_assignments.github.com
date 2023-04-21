import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = "Marvellous Infosystem"



  upper(){
    this.displayText=this.displayText.toUpperCase()
  }

  lower(){
    this.displayText=this.displayText.toLowerCase()
  }
}
