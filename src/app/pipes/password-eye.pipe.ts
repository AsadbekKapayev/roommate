import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'passwordEye'})
export class PasswordEyePipe implements PipeTransform {

  constructor() {
  }

  transform(hidePassword: boolean): string {
    const showPasswordIcon = 'assets/icon/eye.svg';
    const hidePasswordIcon = 'assets/icon/eye-hide.svg';
    return hidePassword ? hidePasswordIcon : showPasswordIcon;
  }
}
