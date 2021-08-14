import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';

import { PagesComponent } from './pages/pages.component';

import { EpisodesModule } from './pages/episodes/episodes.module';
import { FactorsModule } from './pages/factors/factors.module';
import { MessagesModule } from './pages/messages/messages.module';
import { StaticsModule } from './pages/statics/statics.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    EpisodesModule,
    FactorsModule,
    MessagesModule,
    StaticsModule,
    UsersModule
  ]
})
export class PublicModule { }
