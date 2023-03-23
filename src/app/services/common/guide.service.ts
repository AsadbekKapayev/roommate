import {Injectable} from '@angular/core';
import {GuideItem} from "../../models/commons/GuideItem";

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
    },
    {
      id: '2',
      title: 'Guide 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '3',
      title: 'Guide 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '4',
      title: 'Guide 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '5',
      title: 'Guide 5',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '6',
      title: 'Guide 6',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: '7',
      title: 'Guide 7',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  constructor() {
  }

  loadGuides() {
    return this.guides;
  }

  loadGuidesOther(id: string) {
    return this.guides.filter(guide => guide.id !== id);
  }

  loadGuideById(id: string) {
    return this.guides.find(guide => guide.id === id);
  }

}
