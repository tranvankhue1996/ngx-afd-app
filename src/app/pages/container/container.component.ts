import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseService } from './../../shared/services/base.service';
import * as $ from 'jquery';
import { SidebarModel } from '../../layout/sidebar/sidebar.model';

@Component({
  selector: 'afd-container',
  templateUrl: './container.component.html',
  styleUrls: [ './container.component.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class ContainerComponent implements OnInit {

  config: any = {
    navbar: {
      width: '100%',
      height: '60px',
      backgroundColor: '#fff',
      color: '#26A69A',
      logo: 'logo.svg',
    },
    sidebar: {
      width: {
        min: '0',
        max: '240px'
      },
      height: 'calc(100vh - 60px)',
      isExpanded: false,
      listItem: [
        new SidebarModel('/products', 'dashboard', 'Product'),
        new SidebarModel('/about', 'info', 'Info'),
        new SidebarModel('/test', 'note', 'Test'),
      ]
    },
    footer: {
      backgroundColor: '#fff',
      color: '#26A69A',
      companyName: 'Afd Media',
      companyLink: 'https://afd-company.com'
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
