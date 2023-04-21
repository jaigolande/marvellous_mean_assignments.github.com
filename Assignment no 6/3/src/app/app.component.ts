import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>Displaying static text using string interpolation</p> <h1>{{displayStaticData}}</h1>',
  styles :['h1{color: blue;padding : 20px}']
})
export class AppComponent {
  static text: string = "Marvellous Infosystem"


  get displayStaticData(){
    return AppComponent.text
  }
}
