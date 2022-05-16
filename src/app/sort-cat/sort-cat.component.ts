import { FavService } from './../services/fav.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sort-cat',
  templateUrl: './sort-cat.component.html',
  styleUrls: ['./sort-cat.component.css']
})
export class SortCatComponent implements OnInit {

  constructor(private favService: FavService) {

  }

  ngOnInit(): void {
  }

  sortingCat(category: string){
    this.favService.setCategory(category);
  }

  sortingFav(favorite: string){
    this.favService.setFavorite(favorite);
  }


}
