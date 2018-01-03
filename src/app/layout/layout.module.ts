import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
} from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([])
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        SharedModule,
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ]
})

export class LayoutModule {}
