import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultiplyPipe } from './my-multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultiplyPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
