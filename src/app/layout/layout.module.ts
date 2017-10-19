import { ChattingModule } from './../chatting/chatting.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './../home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ProductModule } from './../product/product.module';
import { BaseService } from './../shared/services/base.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { 
    LayoutComponent,
    layoutRoutes
} from './index';

import { ProfileModule } from './../profile/profile.module';

@NgModule({
    imports: [
        FormsModule,
        ProfileModule,
        ProductModule,
        ChattingModule,
        RouterModule.forRoot(layoutRoutes, { useHash: true })
    ],
    declarations: [ 
        LayoutComponent,
        HomeComponent,
        NavbarComponent,
        NotFoundComponent
    ],
    providers: [ BaseService ],
    exports: [ LayoutComponent ]
})

export class LayoutModule {}