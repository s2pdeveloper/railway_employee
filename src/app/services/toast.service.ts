import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
    providedIn: 'root',
})
export class ToastService {

    constructor(private toastController: ToastController) { }

    async success(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1500,
            color: 'success',
            icon: 'checkmark-circle-outline',
            position: 'bottom',
            buttons: [
                {
                    icon: 'close',
                    role: 'cancel'
                }
            ],
        });

        await toast.present();
    }

    async error(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1500,
            color: 'danger',
            icon: 'close-circle-outline',
            position: 'bottom',
            buttons: [
                {
                    icon: 'close',
                    role: 'cancel'
                }
            ],
        });

        await toast.present();
    }
}
