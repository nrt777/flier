import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyBEscMM1cdV9LVavpF_Ic_OPIi-MtHJU7M',
  authDomain: 'flier-4735f.firebaseapp.com',
  projectId: 'flier-4735f',
  storageBucket: 'flier-4735f.appspot.com',
  messagingSenderId: '515917146161',
  appId: '1:515917146161:web:003b8c3482a8c2e549cd10',
};
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
