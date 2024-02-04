import { Routes } from '@angular/router';
import { HotelComponent } from './room-hotel/components/hotel/hotel.component';
import { HotelDetailComponent } from './room-hotel/components/hotel-detail/hotel-detail.component';
import { hotelGuard } from './room-hotel/guards/hotel.guard';
import { NewHotelComponent } from './room-hotel/components/new-hotel/new-hotel.component';
export const routes: Routes = [
  {path:'',component:HotelComponent},
  {path :'hotel/:id', component: HotelDetailComponent,canActivate :[hotelGuard]},
  {path:'hotel/:id/edit',component:NewHotelComponent },
];
