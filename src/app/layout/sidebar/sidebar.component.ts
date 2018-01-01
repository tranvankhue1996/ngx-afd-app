import { Component, Input } from '@angular/core';

@Component({
    selector: 'afd-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})

export class SidebarComponent {
    @Input() isExpanded: Boolean = false;
    @Input() sizeWidth: String = '';
}
