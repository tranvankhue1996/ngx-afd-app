import { Routes } from '@angular/router';
import {
    NavbarComponent,
    SidebarComponent
} from './';

export const layoutRoutes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    },
    {
        path: '',
        component: SidebarComponent,
        outlet: 'sidebar'
    }
];