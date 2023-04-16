import {Ad} from "./Ad";
import {Url} from "./Url";

export class Ads {
  current_page: number;
  data: Ad[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Url[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
