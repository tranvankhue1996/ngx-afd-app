import { Constants } from './../../shared/constants/constants';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'afd-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ]
})

export class FooterComponent implements OnInit {
    year: Number = 0;
    @Input() backgroundColor: String = '#fff';
    @Input() color: String = '#000';
    @Input() companyName: String = 'CompanyABC';
    @Input() companyLink: String = 'companyabc.com';

    ngOnInit() {
        let d = new Date();
        this.year = d.getFullYear();
    }
}
