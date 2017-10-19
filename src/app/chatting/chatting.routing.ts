import { ChattingComponent } from './chatting.component';
import { Routes } from '@angular/router';

export const routesChatting: Routes = [
    {
        path: 'chatting',
        children: [
            {
                path: '',
                component: ChattingComponent,
                data: { title: 'Chatting' }
            }
        ]
    }
];