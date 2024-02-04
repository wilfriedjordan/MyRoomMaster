import { Pipe, PipeTransform } from '@angular/core';
import { HotelModel } from '../room-hotel/Models/hotel.model';
@Pipe({
  name: 'filter',
  standalone:true
})
export class FilterPipe implements PipeTransform {

  transform(items:HotelModel[] , args: string):HotelModel[] {
      if (!items || !args) {
        return items;
      }
    return items.filter(item =>
      item.name.toLowerCase().includes(args.toLowerCase()) ||
      item.description.toLowerCase().includes(args.toLowerCase())
    )
  }

}
