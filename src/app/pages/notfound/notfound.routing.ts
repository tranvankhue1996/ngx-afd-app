import { NotFoundComponent } from './index';
import { Routes } from '@angular/router';

export const routesNotFound: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: NotFoundComponent,
                data: { title: 'Not Found' }
            }
        ]
    }
];