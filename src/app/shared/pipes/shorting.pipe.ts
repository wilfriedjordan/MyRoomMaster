import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorting',
  standalone : true,
})
export class ShortingPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    if(value.length <= 10){
      return value
    }
    else{
      return value.substring(0,args) + '...';
    }
  }

}
