import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './../product/product.module';
import { BaseService } from './../shared/services/base.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {
    LayoutComponent,
    layoutRoutes,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent
} from './index';

import { AboutModule } from './../about/about.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forRoot(layoutRoutes, { useHash: true }),
        AboutModule,
        ProductModule
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent
    ],
    providers: [
        Title,
        BaseService
    ],
    exports: [
        LayoutComponent
    ]
})

export class LayoutModule {}