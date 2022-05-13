import { FavService, SortCat } from './../services/fav.service';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '../models/attraction';

@Component({
  selector: 'app-attract',
  templateUrl: './attract.component.html',
  styleUrls: ['./attract.component.css']
})
export class AttractComponent implements OnInit {

  public listOfAttraction: Attraction[] = [];
  public sortCategory: Array<SortCat> = [{category: ''}];

  constructor(private favService: FavService) {
    this.favService.getAttractionList().subscribe( (value) => {
      this.listOfAttraction = value;
    });
    this.favService.getSortCat().subscribe( (value: Array<SortCat>) =>{
      this.sortCategory = value;
    });
  }

  ngOnInit(): void {
  }

  favOrNot(attraction: Attraction) {
    if (attraction.favorite === true) {
      attraction.favorite = false;
    } else {
      attraction.favorite = true;
    }
  }



}
