import { Routes } from '@angular/router';

import { EpisodesComponent } from './episodes/episodes.component';
import { NewEpisodeComponent } from './new-episode/new-episode.component';
import { Err404Component } from '../../../err404/err404.component';

export const episodesRoutes: Routes = [
    { 
      path: '',  pathMatch: 'full',  /* Base: /app/episodios */
      component: EpisodesComponent 
    },
    { 
      path: 'nuevo', 
      component: NewEpisodeComponent 
    },
    { 
      path: '**', 
      component: Err404Component 
    }
];
