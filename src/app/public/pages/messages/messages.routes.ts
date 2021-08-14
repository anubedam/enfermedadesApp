import { Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';

import { Err404Component } from '../../../err404/err404.component';

export const messagesRoutes: Routes = [
    { 
        path: '',  pathMatch: 'full',  /* Base: /app/mensajes */
        component: MessagesComponent
    },
    {
        path: 'nuevo',
        component: NewMessageComponent
    },
    {
        path: '**', 
        component: Err404Component 
    }
];
