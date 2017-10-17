import { WebWorkerService } from 'angular2-web-worker/web-worker.service';
import { HomeService } from './home/home.service';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser'; 
import { AppComponent }  from './app.component';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports:      [ 
      BrowserModule, 
      FormsModule,
      HttpModule,
      LayoutModule,
  ],
  declarations: [ AppComponent ],
  providers: [ Title, HomeService, WebWorkerService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
