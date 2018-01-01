import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';

export const routesAbout: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AboutComponent,
                data: { title: 'About' }
            }
        ]
    }
];