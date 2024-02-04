import { Component,OnInit } from '@angular/core';
import { HotelModel } from '../../Models/hotel.model';
import { HotelService } from '../../services/hotel.service';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { FilterPipe } from '../../../core/filter.pipe';
@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    HotelListComponent , FilterPipe,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent implements OnInit  {
  Search!:string
  hotels!:HotelModel[]
  name!: string;
  hotelFilter!:HotelModel[]
  termeRecherche!:string
  constructor(private hotelService:HotelService){}
  ngOnInit():void{
    this.hotels = this.hotelService.getAllHotels()
    this.hotelService.termeRecherche$.subscribe(data =>{
      const val= this.termeRecherche = data
      const filter  = this.hotelService.hotels.filter((hotel) =>{
        return hotel.city =='Buea'
      })
    })

  }
}
