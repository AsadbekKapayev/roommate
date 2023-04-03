export interface RoomItem {
  id: string;
  title: string;
  description: string;
  price: number;
  img?: string;
  isLiked: boolean;
  publishedAt: Date;
  viewCount: number;
}
