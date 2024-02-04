import { Injectable } from '@angular/core';
import { HotelModel } from '../Models/hotel.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels:HotelModel[]=[

    {
      id: 1,
      name: "Buea sweet life",
      description: "Hotel au Bord de la mer",
      price: 150.00,
      image: "../../../assets/images/hotels/1.jpg",
      address: "123 Rue de Buea",
      city: "Buea",
      phone: "+237645678900",
      email: "hotelA@example.com",
      state: "West",
      start:4,
      country: "cameroon"
    },
    {
      id: 2,
      name: "Buea sweet life",
      description: "Profitez de la vue .",
      price: 200.00,
      image: "../../../assets/images/hotels/2.jpg",
      address: "456 Rue",
      city: " Buea",
      phone: "+9876543210",
      email: "hotelB@example.com",
      state: "west",
      start:3,
      country: "Cameroon"
    },
    {
      id: 3,
      name: "Dschang panoramique",
      description: "Votre chambre avec un confort panoramique.",
      price: 180.00,
      image: "../../../assets/images/hotels/3.jpg",
      address: "789 Rue de l'Hôtel C",
      city: "Dschang",
      phone: "+1122334455",
      email: "hotelC@example.com",
      state: "Ouest",
      start:5,
      country: "Cameroon"
    },
    {
      id: 4,
      name: "Bafoussam city",
      description: "Votre chambre avec un confort inoubliable",
      price: 220.00,
      image: "../../../assets/images/hotels/4.jpg",
      address: "101 Rue de l'Hôtel D",
      city: "Bafoussam",
      phone: "+9988776655",
      email: "hotelD@example.com",
      state: "État D",
      start:2.5,
      country: "Pays cameroun"
    },
    {
      id: 5,
      name: "Lompoul",
      description: "Chambre completemment Vitree",
      price: 160.00,
      image: "../../../assets/images/hotels/12.jpg",
      address: "202 Rue de l'Hôtel E",
      city: "Bafoussam",
      phone: "+5544332211",
      email: "hotelE@example.com",
      state: "État E",
      start:4.5,
      country: "Pays Cameroon"
    },
    {
      id: 6,
      name: " Marie louise",
      description: "Chambre Spacieux",
      price: 190.00,
      image: "../../../assets/images/hotels/6.jpg",
      address: "303 Rue de l'Hôtel F",
      city: "Dschang",
      phone: "+6677889900",
      email: "hotelF@example.com",
      state: "État F",
      start:3.5,
      country: "Pays Cameroon"
    },
    {
      id: 7,
      name: "City center",
      description: "Yaounde Awea",
      price: 210.00,
      image: "../../../assets/images/hotels/7.jpg",
      address: "404 Rue de l'Hôtel G",
      city: "Yaounde",
      start:2.5,
      phone: "+1122334455",
      email: "hotelG@example.com",
      state: "État G",
      country: "Pays Cameroon"
    },
    {
      id: 8,
      name: "Marakech",
      description: "Haute Gamme ",
      price: 170.00,
      image: "../../../assets/images/hotels/8.jpg",
      address: "505 Rue de l'Hôtel H",
      city: "Yaounde",
      phone: "+9988776655",
      start:5,
      email: "hotelH@example.com",
      state: "État H",
      country: "Pays Cameroon"
    },
    {
      id: 9,
      name: "Saloulou",
      description: "Description of the room",
      price: 230.00,
      image: "../../../assets/images/hotels/9.jpg",
      address: "606 Rue de l'Hôtel I",
      city: "Bafoussam",
      start:2,
      phone: "+5544332211",
      email: "hotelI@example.com",
      state: "État I",
      country: "Pays Cameroon"
    },
    {
      id: 10,
      name: "Douala best life",
      description: "Douala best life",
      price: 180.00,
      image: "../../../assets/images/hotels/10.jpg",
      address: "707 Rue de l'Hôtel J",
      city: "Douala",
      start:4,
      phone: "+6677889900",
      email: "hotelJ@example.com",
      state: "État J",
      country: "Pays Cameroon"
    },
    {
      id: 11,
      name: "Mounter",
      description: "Lit confortable.",
      price: 200.00,
      image: "../../../assets/images/hotels/11.jpg",
      address: "808 Rue ",
      city: "Douala",
      phone: "+1122334455",
      email: "hotelK@example.com",
      state: "État K",
      start:5,
      country: "Pays Cameroon"
    },
    {
      id: 12,
      name: "Marakech",
      description: "Chambre completemment Vitree",
      price: 200.00,
      image: "../../../assets/images/hotels/12.jpg",
      address: "808 Rue de l'Hôtel K",
      city: "Dschang",
      phone: "+1122334455",
      email: "hotelK@example.com",
      state: "État K",
      country: "Pays Cameroon",
      start:4
    }

  ]
  private termeRechercheSource = new BehaviorSubject<string>('');
  termeRecherche$ = this.termeRechercheSource.asObservable();
  constructor() { }
  //Recperation  des Hotels
  getAllHotels():HotelModel[]{
    return this.hotels
  }
  getHotelById(idHotel:number):HotelModel{
    const hotel = this.hotels.find(hotel => hotel.id === idHotel);
    if(hotel){
      return hotel
    }else{
      throw new Error('Hotel not exit ')
    }
  }
  setTermeRecherche(terme: string) : string {
    this.termeRechercheSource.next(terme);
    return terme
  }

}
