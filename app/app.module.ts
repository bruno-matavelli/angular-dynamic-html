import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicHTMLModule } from './dynamic-html'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    DynamicHTMLModule.forRoot({
      components: [
        {component: HelloComponent, selector: 'hello'}
      ]})
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
