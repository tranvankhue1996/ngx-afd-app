
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
  ],
  declarations: [ AppComponent ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
