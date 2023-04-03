export interface RoommateItem {
  id: string;
  surname: string;
  name: string;
  description: string;
  price: number;
  img?: string;
  isLiked: boolean;
  publishedAt: Date;
}
