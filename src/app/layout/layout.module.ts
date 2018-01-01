import { NgModule } from '@angular/core';

import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
} from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
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
