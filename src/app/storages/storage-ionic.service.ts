import {Injectable} from '@angular/core';
import {StorageSecureKeyEnum} from "../shares/static";

@Injectable()
export class StorageIonicService {
  private _storage: Storage;

  constructor(private storageRoot: Storage) {
  }

  get storage() {
    return this._storage;
  }

  async init() {
    this._storage = await this.storageRoot.create();
  }

  set(key: string, value: string) {
    return this.storage.set(key, value);
  }

  get(key: string) {
    return this.storage.get(key);
  }

  setFAIO(value: string) {
    return this.storage.set(StorageSecureKeyEnum.SECURITY_FINGERPRINT_AIO_VALUE, value);
  }

  setLockScreenNumber(value: string) {
    return this.storage.set(StorageSecureKeyEnum.SECURITY_LOCK_SCREEN_NUMBER, value);
  }

  setToken(value: string) {
    return this.storage.set(StorageSecureKeyEnum.TOKEN, value);
  }

  setPhoneNumber(value: string) {
    return this.storage.set(StorageSecureKeyEnum.PHONE_NUMBER, value);
  }

  setUserId(value: string) {
    return this.storage.set(StorageSecureKeyEnum.USER_ID, value);
  }

  getFAIO() {
    return this.storage.get(StorageSecureKeyEnum.SECURITY_FINGERPRINT_AIO_VALUE);
  }

  getLockScreenNumber() {
    return this.storage.get(StorageSecureKeyEnum.SECURITY_LOCK_SCREEN_NUMBER);
  }

  getToken() {
    return this.storage.get(StorageSecureKeyEnum.TOKEN);
  }

  getPhoneNumber() {
    return this.storage.get(StorageSecureKeyEnum.PHONE_NUMBER);
  }

  getUserId() {
    return this.storage.get(StorageSecureKeyEnum.USER_ID);
  }

  clear() {
    return this.storage.clear();
  }

}
