import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FavouritesService } from '../../favourites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrl: './short-list.component.css'
})
export class ShortListComponent implements OnInit{

 constructor(public favouritesService : FavouritesService, private toastr: ToastrService){}

 

 @Input() short_artist : any = []; 
 @Output() valueChange = new EventEmitter();
 Counter: any = 0;

 favourites_artist : any = [];

 ngOnInit(): void {
  
 }

 moveToFavorites(artist: any){
  this.favouritesService.addfavourites(artist);
  
 }

 Onclose(){
  this.Counter = 1;
  this.valueChange.emit(this.Counter);
  this.Counter = 0;
 }


 

}
