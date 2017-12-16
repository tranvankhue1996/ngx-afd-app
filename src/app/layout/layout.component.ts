import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BaseService } from './../shared/services/base.service';
import * as $ from 'jquery';

@Component({
  selector: 'afd-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]
})

export class LayoutComponent implements OnInit { 
  @ViewChild('body') vcBody: any;
  heightBody: number = 100;

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
    //set default service
    this.baseService.setTitle();

    this.updateBodyHeight();

    //loading content
    $(window).on('load', function() {
      $('.loader').fadeOut('slow');
    });
  }

  updateBodyHeight() {
    let H = this.vcBody.nativeElement.clientHeight || 100;
    // get browser Height
    let wh = window.innerHeight || 0;
    if((wh - 106) > 0) {
      this.heightBody = wh - 106;
    }
  }

  @HostListener('window:resize', ['$event'])
  resizeHeight() {
    console.log('abc');
    this.updateBodyHeight();
  }
}
