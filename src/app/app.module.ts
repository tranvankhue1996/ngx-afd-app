import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/primeng';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserAnimationsModule, FormsModule, CalendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
