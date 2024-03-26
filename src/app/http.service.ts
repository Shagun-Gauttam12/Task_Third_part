import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient = inject(HttpClient);

  constructor() { }

  
  
  getAllArtists(artis_name:any){
    return this.httpClient.get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artis_name}&api_key=8bb40fba198ab55f636845b863cf3ad9&format=json`);
   }

   getMusicBrainzArtistByName(artis_name_music_brainz:any){
    return this.httpClient.get(`https://musicbrainz.org/ws/2/artist?query=${artis_name_music_brainz}&fmt=json`);
   }

   getReleaseByArtistName(artistName:any){
     return this.httpClient.get(`https://musicbrainz.org/ws/2/release?query=artist:${artistName}&fmt=json`)
   }

}
