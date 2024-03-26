import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private toastr: ToastrService) { }

  favourites_artists : any[] = [];

  addfavourites(artist:any){
    if(this.favourites_artists.find( (i) => i === artist)){
      alert("already in favourites")
      return;
    }
    this.favourites_artists.push(artist);
    this.toastr.success('Artist added to Favourites !!');
  }

  getfavourites(){
    return this.favourites_artists;
  }


  deletefavourites(artist:any){
    this.favourites_artists = this.favourites_artists.filter((i) => i !== artist );
   
  }
}
