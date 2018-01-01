import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {
    ContainerComponent,
    HomeComponent,
    pagesRouting,
} from './index';

import { LayoutModule } from '../layout/layout.module';
import { BaseService } from '../shared/services/base.service';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        LayoutModule,
        RouterModule.forRoot(pagesRouting, { useHash: true })
    ],
    declarations: [
        ContainerComponent,
        HomeComponent
    ],
    providers: [
        Title,
        BaseService
    ],
    exports: [
        ContainerComponent,
        HomeComponent
    ]
})
export class PagesModule {}
