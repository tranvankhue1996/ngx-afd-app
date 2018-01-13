import { TestComponent } from './index';
import { Routes } from '@angular/router';

export const routesTest: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TestComponent,
                data: { title: 'Test Components' }
            }
        ],
        pathMatch: 'full'
    }
];