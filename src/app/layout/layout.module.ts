import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { ChattingModule } from './../chatting/chatting.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './../home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ProductModule } from './../product/product.module';
import { BaseService } from './../shared/services/base.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {
    LayoutComponent,
    layoutRoutes
} from './index';

import { ProfileModule } from './../profile/profile.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        SharedModule,
        RouterModule.forRoot(layoutRoutes, { useHash: true }),
        ProfileModule,
        ProductModule,
        ChattingModule
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        NavbarComponent,
        NotFoundComponent
    ],
    providers: [
        Title,
        BaseService
    ],
    exports: [ LayoutComponent ]
})

export class LayoutModule {}