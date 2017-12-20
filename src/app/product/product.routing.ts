import { ProductComponent } from './product.component';
import { Routes } from '@angular/router';

export const routesProduct: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductComponent,
                data: { title: 'Products' }
            }
        ],
        pathMatch: 'full'
    }
];