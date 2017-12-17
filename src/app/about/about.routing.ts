import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';

export const routesAbout: Routes = [
    {
        path: 'about',
        children: [
            {
                path: '',
                component: AboutComponent,
                data: { title: 'About' }
            }
        ]
    }
];