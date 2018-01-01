import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'afd-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})

export class NavbarComponent {
    @Input() isFixedTop: Boolean = false;
    @Input() sizeHeight: String = '0px';
    @Input() sizeWidth: String = '0px';
    @Input() imgLogo: String = '';
    @Output() onChangeSidebar: EventEmitter<any> = new EventEmitter<any>();

    changeSidebar() {
        // change collapse or expand
        this.onChangeSidebar.emit(true);
    }
}
