import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'afd-render-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'vi']);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
        console.log('constructor home');
    }
}