import { Component, Input } from '@angular/core';

@Component({
    selector: 'afd-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: [ './jumbotron.component.css' ]
})

export class JumbotronComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() height: number = 100;
}