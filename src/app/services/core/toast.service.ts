import {Injectable} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) {
  }

  async present(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  async presentButton(message: string, handler: () => any, duration: number = 3000) {
    const toast = await this.toast.create({
      message: message,
      duration: duration,
      position: 'top',
      buttons: [
        {
          side: 'end',
          text: 'Отменить  .',
          handler: handler,
        },
      ],
    });

    await toast.present();
  }

}
