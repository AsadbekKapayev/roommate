import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {RoomItem} from "../../models/commons/ad/RoomItem";
import {RoommateItem} from "../../models/commons/ad/RoommateItem";

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

  roommates: RoommateItem[] =[
    {
      id: '1',
      surname: 'Tarasov',
      name: 'Daniyar',
      description: 'Казахи известны своими престижными и сложными фамилиями. ' +
        'Для людей принято иметь хотя бы одно казахское имя, которое обычно является именем деда по материнской линии.',
      price: 35000,
      img: 'assets/images/human1.jpg',
      isLiked: false,
      publishedAt: new Date(),
    },
    {
      id: '2',
      surname: 'Ruslanov',
      name: 'Serik',
      description: 'Казахи известны своими престижными и сложными фамилиями. ' +
        'Для людей принято иметь хотя бы одно казахское имя, которое обычно является именем деда по материнской линии.',
      price: 30000,
      img: 'assets/images/human2.jpg',
      isLiked: false,
      publishedAt: new Date(),
    },
    {
      id: '3',
      surname: 'Ayatev',
      name: 'Ershat',
      description: 'Казахи известны своими престижными и сложными фамилиями. ' +
        'Для людей принято иметь хотя бы одно казахское имя, которое обычно является именем деда по материнской линии.',
      price: 35000,
      img: 'assets/images/human3.jpg',
      isLiked: false,
      publishedAt: new Date(),
    },
    {
      id: '4',
      surname: 'Maratov',
      name: 'Yerzhan',
      description: 'Казахи известны своими престижными и сложными фамилиями. ' +
        'Для людей принято иметь хотя бы одно казахское имя, которое обычно является именем деда по материнской линии.',
      price: 45000,
      img: 'assets/images/human4.jpg',
      isLiked: false,
      publishedAt: new Date(),
    },
    {
      id: '5',
      surname: 'Daniyarev',
      name: 'Alen',
      description: 'Казахи известны своими престижными и сложными фамилиями. ' +
        'Для людей принято  иметь хотя бы одно казахское имя, которое обычно является именем деда по материнской линии.',
      price: 25000,
      img: 'assets/images/human5.jpg',
      isLiked: false,
      publishedAt: new Date(),
    },
  ]

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

  loadRoomsFavourites() {
    return this.rooms.filter(room => room.isLiked);
  }

  loadRoommate() {
    return this.roommates;
  }

  loadRoommatesOther(id: string) {
    return this.roommates.filter(roommate => roommate.id !== id);
  }

  loadRoommateById(id: string) {
    return this.roommates.find(roommate => roommate.id === id);
  }

  loadRoommatesFavourites() {
    return this.roommates.filter(roommate => roommate.isLiked);
  }

}
