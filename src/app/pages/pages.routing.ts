import { Routes } from '@angular/router';
import { HomeComponent } from './index';

export const pagesRouting: Routes = [
    {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full'
    },
    // {
    //     path: '',
    //     component: HomeComponent,
    //     data: {
    //         title: 'Home'
    //     }
    // },
    {
        path: 'products',
        loadChildren: './product/product.module#ProductModule?sync=true'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule?sync=true'
    },
    {
        path: 'test',
        loadChildren: './test/test.module#TestModule?sync=true'
    },
    {
        path: '**',
        loadChildren: './notfound/notfound.module#NotFoundModule?sync=true'
    }
];
