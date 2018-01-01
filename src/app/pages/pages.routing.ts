import { Routes } from '@angular/router';
import { HomeComponent } from './index';

export const pagesRouting: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Bill Chan'
        }
    },
    {
        path: 'products',
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule?sync=true'
    },
    {
        path: '**',
        loadChildren: './notfound/notfound.module#NotFoundModule?sync=true'
    }
];
