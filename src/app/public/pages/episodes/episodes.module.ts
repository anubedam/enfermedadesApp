import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEpisodeComponent } from './new-episode/new-episode.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    NewEpisodeComponent, 
    EpisodesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewEpisodeComponent, 
    EpisodesComponent
  ]
})
export class EpisodesModule { }
