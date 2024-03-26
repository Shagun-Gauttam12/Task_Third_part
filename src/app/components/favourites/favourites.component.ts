import { Component, Input } from '@angular/core';
import { FavouritesService } from '../../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

  constructor(public favouritesService : FavouritesService){}

  Ondelete(artist:any){
    if(confirm("You want to Remove the item ?")){
      this.favouritesService.deletefavourites(artist);
    }
  }
}
