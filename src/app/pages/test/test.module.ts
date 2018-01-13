import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
    TestComponent,
    routesTest
} from './index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routesTest)
    ],
    declarations: [ TestComponent ]
})

export class TestModule {}
