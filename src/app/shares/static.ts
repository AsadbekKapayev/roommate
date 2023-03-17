export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const LINK_REG_EXP = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const IIN_REGEX = /^[\d+]{12}$/;
export const MAX_VALUE_CODE = '999999';
export const MAX_VALUE_AMOUNT = 100000000000000;
// export const CONNECTION_NONE = (window[`Connection`] && window[`Connection`].NONE) || 'none';

export const JPEG_FORMAT = 'data:image/jpeg;base64,';
export const BANK_CARD = 'BANK_CARD';
export const PRIVATE_KEY_QR = 'qrcodegeneratorsize061==';
export const FILTER_LIMIT = 100;
export const FILTER_OFFSET = 10;
export const FILE_LIMIT = 31457280;
export const IMAGE_LIMIT = 31457280;
export const AD_DETAIL_SHARE_URL = 'https://mobidom.kz/ads-info/';
export const ROOM_TYPE = 'MOBIDOM';
export const CYRILLIC_PATTERN = /^[\u0400-\u04FF]+$/;

export const EMPTY_URL = '/asdfasdfasdfsadfsdfasf';

export const DEFAULT_IMAGE = '/assets/images/white-default.png';
export const AVATAR_IMAGE = '/assets/icon/mobidom/unauthorized-user.svg';

export const STORAGE_LOCAL_PROFILE = 'LOCAL_PROFILE_';

export const STORAGE_LOCAL = 'LOCAL_';

export const STORAGE_FAVORITE = 'FAVORITE_';

export enum StorageSecureEnumStatus {
  SUCCESS = 'success',
  REJECT = 'reject',
  INIT = 'init',
}

export enum StorageLocalKeyEnum {
  // common small storage
  PUSH_TOKEN = 'push_token',
  APP_VERSION = 'APP_VERSION',
  DEVICE_PLATFORM = 'DEVICE_PLATFORM',
  DEVICE_UUID = 'DEVICE_UUID',
  INPUT_COUNT = 'INPUT_COUNT',
  SMS_CODE_RECORD_ID = 'SMS_CODE_RECORD_ID',
  TOKEN = 'TOKEN',
  CITY = 'CITY',
  CHECKED_YANDEX = 'CHECKED_YANDEX',
  GEOLOCATION_PERMISSION = 'GEOLOCATION_PERMISSION',
  CACHED_ADS = 'CACHED_ADS',
  INSTAGRAM_REDIRECT_VIEW = 'INSTAGRAM_REDIRECT_VIEW',
}

export enum StorageLocalProfileKeyEnum {
  // profile not secure storage
  ROLE = 'role',
  LANGUAGE_CODE = 'language_code',
  IS_ACCEPT_PRIVACY_POLICY = 'IS_ACCEPT_PRIVACY_POLICY',
  IS_USED_FINGERPRINT_AIO = 'IS_USED_FINGERPRINT_AIO',
  IS_USED_CODE_ACCESS = 'IS_USED_CODE_ACCESS',
  IS_AUTHENTICATED = 'IS_AUTHENTICATED',
}

export enum StorageIonicKeyEnum {
  // common big storage
  LANGUAGE_VERSION = 'LANGUAGE_VERSION_',
  LANGUAGE_TRANSLATE = 'TRANSLATE_',
}

export enum StorageSecureKeyEnum {
  // profile secure storage
  USER_ID = 'user_id',
  USERNAME = 'username',
  PHONE_NUMBER = 'phone_number',
  PASSWORD = 'password',
  MOBILE_TOKEN = 'mobile-token',
  TOKEN = 'token',
  SECURITY_PATTERN_VALUE = 'SECURITY_PATTERN_VALUE',
  SECURITY_FINGERPRINT_AIO_VALUE = 'SECURITY_FINGERPRINT_AIO_VALUE',
  SECURITY_LOCK_SCREEN_NUMBER = 'SECURITY_LOCK_SCREEN_NUMBER',
}
