import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'afd-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.css' ]
})

export class CardComponent implements OnInit {
    @Input() model: any;

    ngOnInit() {
    }
}