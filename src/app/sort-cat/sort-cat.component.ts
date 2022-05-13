import { BehaviorSubject, of } from 'rxjs';
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

  sorting(category: string){
    this.favService.setValue(category);
  }

  showOptions(){
    const options = document.querySelector('.options');
    options?.setAttribute('style','display:block; transition: 1s;');
    this.riseHeight;
  }

  riseHeight(){
    const container = document.querySelector('.container');
    container?.animate({height: '100px'},200);
  }

}
