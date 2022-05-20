import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Attraction } from '../models/attraction';

@Injectable({
  providedIn: 'root'
})
export class FavService {

private sortCat : Array<SortCat> = [{category: '', favorite: 'mixed'}];
private ObsSortCat = new BehaviorSubject<Array<SortCat>>(this.sortCat);

private listOfAttraction= new BehaviorSubject<Array<Attraction>>([]);


constructor() {
   const list = [
    { name: "Wieża Eiffla", image: 'assets/eiffeltower.png', country: "Francja", yearOfBuild: 1889, favorite: false },
    { name: "Krzywa Wieża w Pizie", image: 'assets/pisatower.png', country: "Włochy", yearOfBuild: 1372, favorite: true },
    { name: "Big Ben", image: 'assets/bigben.png', country: "Wielka Brytania", yearOfBuild: 1859, favorite: false },
    { name: "Brama Brandenburska", image: 'assets/brandenburggate.png', country: "Niemcy", yearOfBuild: 1791, favorite: false },
    { name: "Parlament w Budapeszcie", image: 'assets/budapestparlament.png', country: "Węgry", yearOfBuild: 1904, favorite: false }
  ];
  this.listOfAttraction.next(list);
}

setCategory(value: string){
  this.sortCat[0].category = value;
  this.ObsSortCat.next(this.sortCat);
}

setFavorite(value: string){
  this.sortCat[0].favorite = value;
  this.ObsSortCat.next(this.sortCat);
}

getSortCat(): Observable<Array<SortCat>>{
  return this.ObsSortCat.asObservable();
}

getAttractionList(): Observable<Array<Attraction>>{
  return this.listOfAttraction.asObservable();
}


}

export interface SortCat{
  category: string ;
  favorite: string ;
}
