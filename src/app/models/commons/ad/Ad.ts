import {User} from "../user/User";
import {Item} from "../Item";
import {Media} from "./Media";

export class Ad {
  id: number;
  ad_gender_type_id: number;
  apartment_condition_id: number;
  apartment_furniture_status_id: number;
  balconies_count: number;
  bathrooms_count: number;
  city_id: number;
  contact_email: string;
  contact_name: string;
  coordinates: string;
  createdAtDiffForHumans: string;
  created_at: Date;
  deleted_at: Date;
  description: string;
  floor: number;
  floor_from: number;
  kitchen_studio: number;
  location: string;
  loggias_count: number;
  media: Media[];
  phone_number: string;
  price: number;
  price_from: number;
  price_com: number;
  price_pledge: number;
  roommate_count: number;
  rooms_count: number;
  square_general: number;
  square_kitchen: number;
  square_living: number;
  updated_at: Date;
  user_id: number;
  views: number;
  apartment_bathrooms_types: Item[];
  apartment_bathrooms: Item[];
  apartment_furniture_status: string[];
  apartment_furniture: Item[];
  apartment_facilities: Item[];
  apartment_bathroom_types: string[];
  apartment_securities: Item[];
  window_directions: Item[];
  apartment_for: Item[];
  user_liked: boolean;
  user: User;
  apartment_condition: Item;
  gender_type: Item;
  status_moderation: Item;
  liked_users: string[];
  model: string;
  isLiked?: boolean;
}
