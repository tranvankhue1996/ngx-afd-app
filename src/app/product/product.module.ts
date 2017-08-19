import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    ProductComponent,
    routesProduct
} from './index';

@NgModule({
    imports: [
        RouterModule.forChild(routesProduct)
    ],
    declarations: [ ProductComponent ]
})

export class ProductModule {}