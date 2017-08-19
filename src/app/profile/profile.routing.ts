import { ProfileComponent } from './profile.component';
import { Routes } from '@angular/router';

export const routesProfile: Routes = [
    {
        path: 'profile',
        children: [
            {
                path: '',
                component: ProfileComponent,
                data: { title: 'Profile' }
            }
        ]
    }
];