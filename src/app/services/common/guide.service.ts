import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";
import {GuideType} from "../../models/commons/GuideType";

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  guides: GuideItem[] = [
    {
      id: '1',
      title: 'Guide 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide.jpg',
      category: GuideType.ADVICE,
    },
    {
      id: '2',
      title: 'Guide 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide1.jpg',
      category: GuideType.ADVICE,
    },
    {
      id: '3',
      title: 'Guide 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide2.jpg',
      category: GuideType.ADVICE,
    },
    {
      id: '4',
      title: 'Guide 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide3.jpg',
      category: GuideType.NEW,
    },
    {
      id: '5',
      title: 'Guide 5',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide4.png',
      category: GuideType.NEW,
    },
    {
      id: '6',
      title: 'Guide 6',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide5.png',
      category: GuideType.NEW,
    },
    {
      id: '7',
      title: 'Guide 7',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'assets/images/guide6.jpg',
      category: GuideType.ADVICE,
    },
  ];

  constructor() {
  }

  loadGuides() {
    return this.guides;
  }

  loadByCategory(category: GuideType) {
    return this.guides.filter(guide => guide.category === category);
  }

  loadGuidesOther(id: string) {
    return this.guides.filter(guide => guide.id !== id);
  }

  loadGuideById(id: string) {
    return this.guides.find(guide => guide.id === id);
  }

}
