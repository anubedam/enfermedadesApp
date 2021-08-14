import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMessageComponent } from './new-message/new-message.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    NewMessageComponent, 
    MessagesComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    NewMessageComponent, 
    MessagesComponent
  ]
})
export class MessagesModule { }
