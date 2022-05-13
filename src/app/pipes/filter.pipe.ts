import { Attraction } from './../models/attraction';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Attraction[], arg: string): Attraction[] {
    if(arg == 'name'){
      value = value.sort((a,b) =>{
        if(a.name>b.name){
          return 1;
        }else{
          return -1;
        }
      });
    }else if(arg == 'country'){
      value = value.sort((a,b) =>{
        if(a.country>b.country){
          return 1;
        }else{
          return -1;
        }
      });
    }else if(arg == 'yearOfBuild'){
      value = value.sort((a,b) =>{
        if(a.yearOfBuild>b.yearOfBuild){
          return 1;
        }else{
          return -1;
        }
      });
    }else if(arg == 'favorite'){
      value = value.filter( fav => fav.favorite == true );
    }
   return value;
  }

}
