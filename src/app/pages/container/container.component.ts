import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseService } from './../../shared/services/base.service';
import * as $ from 'jquery';

@Component({
  selector: 'afd-container',
  templateUrl: './container.component.html',
  styleUrls: [ './container.component.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class ContainerComponent implements OnInit {

  config: any = {
    navbar: {
      width: '100vw',
      height: '60px',
      logo: 'logo.svg',
    },
    sidebar: {
      width: {
        min: '0',
        max: '240px'
      },
      height: 'calc(100vh - 60px)',
      isExpanded: true
    }
  };

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

  controlSidebar() {
    this.config.sidebar.isExpanded = !this.config.sidebar.isExpanded;
  }
}
