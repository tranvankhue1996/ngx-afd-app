import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    ProductComponent,
    routesProduct
} from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routesProduct)
    ],
    declarations: [ ProductComponent ]
})

export class ProductModule {}