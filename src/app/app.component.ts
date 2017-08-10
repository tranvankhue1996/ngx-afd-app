import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Hello {{name}}</h1>
        <p-calendar [(ngModel)]="value"></p-calendar>
      </div>
    </div>  
  </div>
  `
})
export class AppComponent  { 
  name = 'Angular'; 
  value: Date;

}
