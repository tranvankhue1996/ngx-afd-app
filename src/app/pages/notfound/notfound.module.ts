import { NgModule } from '@angular/core';
import { NotFoundComponent, routesNotFound } from './index';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routesNotFound)
    ],
    declarations: [
        NotFoundComponent
    ]
})
export class NotFoundModule {}
