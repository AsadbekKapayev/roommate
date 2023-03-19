import { Injectable } from '@angular/core';
import {NavController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  async present(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

}
