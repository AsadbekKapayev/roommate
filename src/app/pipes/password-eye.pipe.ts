import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'passwordEye'})
export class PasswordEyePipe implements PipeTransform {

  constructor() {
  }

  transform(hidePassword: boolean): string {
    const showPasswordIcon = 'assets/icon/mobidom/password-eye.svg';
    const hidePasswordIcon = 'assets/icon/mobidom/password-closed-eye.svg';
    return hidePassword ? hidePasswordIcon : showPasswordIcon;
  }
}
