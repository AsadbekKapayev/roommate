import {Injectable} from "@angular/core";
import {LocalStorage} from "../../shares/static";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  get token() {
    return localStorage.getItem(LocalStorage.TOKEN);
  }

  setToken(token: string) {
    localStorage.setItem(LocalStorage.TOKEN, token);
  }

  resetToken() {
    localStorage.setItem(LocalStorage.TOKEN, '');
  }

  get tempToken() {
    return localStorage.getItem(LocalStorage.TEMP_TOKEN);
  }

}
