import { Injectable } from '@angular/core';
import {StorageIonicService} from "../../storages/storage-ionic.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageIonicService: StorageIonicService,) { }

  setPhoneNumber(phoneNumber: string): Promise<string> {
    return this.storageIonicService.setPhoneNumber(phoneNumber);
  }

  getPhoneNumber(): Promise<string> {
    return this.storageIonicService.getPhoneNumber();
  }

}
