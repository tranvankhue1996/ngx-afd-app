import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
    AboutComponent,
    routesAbout
} from './index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routesAbout)
    ],
    declarations: [ AboutComponent]
})

export class AboutModule {}