import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { BaseService } from './../../shared/services/base.service';
import * as $ from 'jquery';

@Component({
  selector: 'afd-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})

export class MainComponent implements OnInit { 

  constructor(private baseService: BaseService,
    private translate: TranslateService) {
      // translate.addLangs(['en', 'vi']);
      // console.log('translate: ', translate);
      // // translate.setDefaultLang('en');

      // let browserLang = translate.getBrowserLang();
      // console.log("browser: ", browserLang);
      // translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  ngOnInit() {
    // set default service
    this.baseService.setTitle();

    // loading content
    $(window).on('load', function() {
      $('.loader').fadeOut('slow');
    });
  }
}
