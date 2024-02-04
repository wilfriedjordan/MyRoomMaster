import { Component,OnInit } from '@angular/core';
import { HotelModel } from '../../Models/hotel.model';
import { CommonModule } from '@angular/common';
import { ShortingPipe } from '../../../shared/pipes/shorting.pipe';
import { StartRetingComponent } from '../../../shared/components/start-reting/start-reting.component';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule,ShortingPipe,StartRetingComponent,RouterModule],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent implements OnInit {
  hotel!:HotelModel
  messageStart!:string
  constructor(private hotelService:HotelService,private route:ActivatedRoute){}
  ngOnInit(): void {
    const idHotel =+ this.route.snapshot.params['id']
    this.hotel= this.hotelService.getHotelById(idHotel)
  }
    NbStart(message:string){
    this.messageStart = message
  }
}
