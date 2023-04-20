import {Injectable} from "@angular/core";
import {HttpService} from "../services/roots/http.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {Item} from "../models/commons/Item";
import {User} from "../models/commons/user/User";

@Injectable({
  providedIn: 'root'
})
export class ProfileController {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  updateProfile(name: string, email: string, genderId: number, photo: Blob): Observable<any> {
    return this.httpService.postMultipart('/user/profile/update', {
      name: name,
      email: email,
      gender_id: genderId,
      photo: photo
    }).pipe(map((value) => value as any));
  }

  loadGenders(): Observable<Item[]> {
    return this.httpService.get('/genders', {})
      .pipe(map((value) => value.body.data[0] as Item[]));
  }

}
