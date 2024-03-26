import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LastfmComponent } from './components/lastfm/lastfm.component';
import { MusicBrainzComponent } from './components/music-brainz/music-brainz.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortListComponent } from './components/short-list/short-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastfmComponent,
    MusicBrainzComponent,
    FavouritesComponent,
    AccordionComponent,
    ShortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule ,
    NgbCollapseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
