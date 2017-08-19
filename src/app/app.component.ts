import { Component } from '@angular/core';

@Component({
  selector: 'afd-studio-app',
  template: `
  <afd-render-layout></afd-render-layout>
  `
})
export class AppComponent  { 
  name = 'Angular'; 
  value: Date;

}
