import { Component, Input } from '@angular/core';

@Component({
    selector: 'afd-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})

export class NavbarComponent {
    @Input() isFixedTop: boolean = false;
}