import { Component, Input, input } from '@angular/core';
import { FavouritesService } from '../../favourites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  @Input() release_year : any[] = [];
  @Input()  release_title : any[] = [];
  @Input() release_label: any[] = [];
  @Input() track_count : any[] = [];

  constructor(private favouritesService: FavouritesService, private toastr: ToastrService){}


  numSequence(n: number): Array<number> { 
    return Array(n); 
  }

  OnaddFavourites(i:any){
    this.favouritesService.addfavourites(this.release_title[i]);
    // this.toastr.success('Artist added to Favourites !!');
  }
  
}
