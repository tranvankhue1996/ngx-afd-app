import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';

export const layoutRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Bill Chan'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Not Found 404'
        }
    }
];
