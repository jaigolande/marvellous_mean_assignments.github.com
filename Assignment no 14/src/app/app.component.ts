import { Component, OnInit, } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd';


  constructor(private builder : FormBuilder){
  }

  get f(){
    return this.MarvelForm.controls;
  }

    MarvelForm = this.builder.group({
      FirstName : ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      LastName : ['',[Validators.required]],
      Phone : ['',[Validators.required,Validators.pattern('[0-9]+'), Validators.maxLength(10),Validators.minLength(10)]],
      Email : ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}')]],
      City    : ['',[Validators.required, Validators.pattern('[a-zA-Z]{4,}')]],
      State    : ['Gujrat',[Validators.required]],
      ZipCode    : ['',[Validators.required,Validators.pattern('[0-9]{5}')]],
      Comment    : ['',[Validators.required, Validators.minLength(30)]],


    })

    display(){
      console.log(this.MarvelForm.controls.Phone.errors);
    }

    onSubmit(){
      console.log(this.MarvelForm.value);
      console.log(this.MarvelForm);
    }
  
}
