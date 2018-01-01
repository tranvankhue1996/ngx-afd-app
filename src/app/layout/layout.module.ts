import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
} from './index';
import { SharedModule } from '../shared/shared.module';
import { layoutRoutes } from './layout.routing';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(layoutRoutes)
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
