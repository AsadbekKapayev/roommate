import {GuideType} from "./GuideType";

export interface GuideItem {
  id: string;
  title: string;
  description: string;
  category: GuideType,
  img?: string;
}
