import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  handlerMessage = '';
  roleMessage = '';
  component = Tab3Page;
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: '',
      message: 'Do you want to receive file from {other Device}?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            this.handlerMessage = 'Alert cancaled';
          },
        },
        {
          text: 'Accept',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/download']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
