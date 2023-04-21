import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name=''

// getLength(){
//   return this.name.length
// }

funCall(e){
  console.log(e.target.value.length);
  this.name=e.target.value.length

}
}
