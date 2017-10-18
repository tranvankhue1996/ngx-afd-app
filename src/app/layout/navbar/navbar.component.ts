import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'afd-render-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})

export class NavbarComponent implements OnInit{
    now: string = "timer";

    constructor() {
        this.setNowDate.bind(this);
    }

    ngOnInit() {

        //ways 1: use function setInterval 
        setInterval(()=> {
            this.setNowDate();
        }, 1000);

        //ways 2: use method interval of Observable object.
        // let loop = Observable.interval(1000);
        // loop.subscribe(()=> {
        //     this.setNowDate();
        // });
    }

    setNowDate() {
        let x = new Date();
        this.now = x.toLocaleString();
    }
}