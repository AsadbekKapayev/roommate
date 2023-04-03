import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {RoomItem} from "../../models/commons/ad/RoomItem";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  rooms: RoomItem[] = [
    {
      id: '1',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/house.jpg',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '2',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '3',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/house2.jpg',
      isLiked: true,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '4',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/house3.jpg',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '5',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/house4.jpg',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '6',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/room1.jpg',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '7',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: 'assets/images/room2.jpg',
      isLiked: true,
      publishedAt: new Date(),
      viewCount: 150
    },
  ];

  constructor() {
  }

  loadRooms() {
    return this.rooms;
  }

  loadRoomsOther(id: string) {
    return this.rooms.filter(room => room.id !== id);
  }

  loadRoomById(id: string) {
    return this.rooms.find(room => room.id === id);
  }

  loadFavourites() {
    return this.rooms.filter(room => room.isLiked);
  }

}
