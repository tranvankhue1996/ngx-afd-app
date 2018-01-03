import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './config/environment';

if (environment.production === true) {
    enableProdMode();
  }

platformBrowserDynamic().bootstrapModule(AppModule);
