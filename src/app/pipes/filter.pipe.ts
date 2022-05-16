import { Attraction } from './../models/attraction';
import { Pipe, PipeTransform } from '@angular/core';
import { SortCat } from '../services/fav.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Attraction[], cat: string, fav: string): Attraction[] {

    if(cat == 'name'){

      value = value.sort((a,b) =>{
        if(a.name>b.name){
          return 1;
        }else{
          return -1;
        }
      });

    }else if(cat == 'country'){

      value = value.sort((a,b) =>{
        if(a.country>b.country){
          return 1;
        }else{
          return -1;
        }
      });

    }else if(cat == 'yearOfBuild'){

      value = value.sort((a,b) =>{
        if(a.yearOfBuild>b.yearOfBuild){
          return 1;
        }else{
          return -1;
        }
      });

    }

    if(fav == 'favorite'){

      value = value.filter( (fav: Attraction) => fav.favorite == true);

    }else if(fav == 'nonFavorite'){

      value = value.filter( (fav: Attraction) => fav.favorite == false);

    }

   return value;
  }

}
