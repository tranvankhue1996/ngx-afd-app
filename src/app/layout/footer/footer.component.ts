import { Constants } from './../../shared/constants/constants';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'afd-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.css' ]
})

export class FooterComponent implements OnInit {
    year: number = 0;
    constants = Constants;

    ngOnInit() {
        let d = new Date();
        this.year = d.getFullYear(); 
    }
}