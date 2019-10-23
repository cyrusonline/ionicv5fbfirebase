import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCdNc2yPsJDUESSaxgLEoReEf7vvYx2lGA",
  authDomain: "whatwhat-a928d.firebaseapp.com",
  databaseURL: "https://whatwhat-a928d.firebaseio.com",
  projectId: "whatwhat-a928d",
  storageBucket: "whatwhat-a928d.appspot.com",
  messagingSenderId: "608273391183",
  appId: "1:608273391183:web:61d4704459fb9a6e"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
