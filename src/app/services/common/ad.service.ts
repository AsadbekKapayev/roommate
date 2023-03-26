import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {AdItem} from "../../models/commons/ad/AdItem";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  ads: AdItem[] = [
    {
      id: '1',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
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
      img: '',
      isLiked: true,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '4',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '5',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '6',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
      isLiked: false,
      publishedAt: new Date(),
      viewCount: 150
    },
    {
      id: '7',
      title: '1-комнатная квартира',
      description: 'Алматы р-н, Нажимеденова',
      price: 150000,
      img: '',
      isLiked: true,
      publishedAt: new Date(),
      viewCount: 150
    },
  ];

  constructor() {
  }

  loadAds() {
    return this.ads;
  }

  loadAdsOther(id: string) {
    return this.ads.filter(ad => ad.id !== id);
  }

  loadAdById(id: string) {
    return this.ads.find(ad => ad.id === id);
  }

}
