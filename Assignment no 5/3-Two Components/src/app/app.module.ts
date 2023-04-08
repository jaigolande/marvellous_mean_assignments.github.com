import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondCompComponent,
    FirstCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
