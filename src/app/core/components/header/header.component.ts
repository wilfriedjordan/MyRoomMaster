import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {   FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HotelService } from '../../../room-hotel/services/hotel.service';
import { HotelModel } from '../../../room-hotel/Models/hotel.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  searchUser!:string
  Hotels!:HotelModel[]
  constructor(private hotelService:HotelService) { }
  ngOnInit(): void {
    //this.Hotels = this.hotelService.getAllHotels();
  }

  onSearch(form:NgForm):void {

    console.log(form.value)
    form.resetForm()
  }
  onTerme(){
    this.hotelService.setTermeRecherche(this.searchUser)
  }
}

