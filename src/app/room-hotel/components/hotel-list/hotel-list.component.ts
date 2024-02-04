import { Component,OnInit,Input } from '@angular/core';
import { HotelModel } from '../../Models/hotel.model';
import { CommonModule } from '@angular/common';
import { ShortingPipe } from '../../../shared/pipes/shorting.pipe';
import{StartRetingComponent} from '../../../shared/components/start-reting/start-reting.component' ;
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, ShortingPipe,StartRetingComponent, RouterModule   ],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss'
})
export class HotelListComponent implements OnInit {
  @Input() hotel!:HotelModel
  constructor(private route:Router){}
  ngOnInit(): void {}
  messageStart!:string

  NbStart(message:string){
    this.messageStart = message
  }
  viewDetail(){
    this.route.navigateByUrl(`hotel/${this.hotel.id}`)
  }
}
