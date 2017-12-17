import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'afd-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.css' ]
})

export class CardComponent implements OnInit {
    @Input() isTextCenter: boolean = false;
    @Input() imgLink: string = 'https://mdbootstrap.com/images/regular/people/img%20(67).jpg';
    @Input() title: string = 'Card Name';
    @Input() type: string = 'NodeJS';
    @Input() views: number = 0;

    strViews: string;

    ngOnInit() {
        if(this.views < 2) { this.strViews = "view" }
        else { this.strViews = "views"; }
    }
}