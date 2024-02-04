import { Component,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HotelModel } from '../../Models/hotel.model';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-new-hotel',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule , RouterModule],
  templateUrl: './new-hotel.component.html',
  styleUrl: './new-hotel.component.scss'
})
export class NewHotelComponent implements OnInit {

  FormData!:FormGroup
  hotelPreview$!:Observable<HotelModel>
  constructor(private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      image:[null,Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      country:['',Validators.required]
    })
    this.hotelPreview$ = this.FormData.valueChanges.pipe(
      map(formData =>({
        ...formData,
        start:0,
        state:'',
        id:0
      }))
    )
  }
  onSubmit(): void {
    console.log(this.FormData.value)
    this.FormData.reset()
  }
}