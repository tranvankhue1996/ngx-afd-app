import { Component, Input } from '@angular/core';
import { SidebarModel } from './sidebar.model';

@Component({
    selector: 'afd-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})

export class SidebarComponent {
    @Input() isExpanded: Boolean = false;
    @Input() sizeHeight: String = '0px';
    @Input() sizeWidth: String = '0px';

    @Input() listItem: SidebarModel[] = [];
}
