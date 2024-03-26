import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastfmComponent } from './components/lastfm/lastfm.component';
import { MusicBrainzComponent } from './components/music-brainz/music-brainz.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
const routes: Routes = [
  {path : 'lastfm', component :LastfmComponent },
  {path : 'music-brainz',component:MusicBrainzComponent},
  {path : 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
