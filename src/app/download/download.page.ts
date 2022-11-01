import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
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

  ngOnInit() {}
}
