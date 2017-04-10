import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { MyLifePlanPage } from '../pages/my-life-plan/plan';
import { EmailVerifyPage } from '../pages/signup/email-verify/verify';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.setHomePage();
  }

  setHomePage() {
    let isEmailVerified = localStorage.getItem("emailVerify");
    if (isEmailVerified === "true") {
      this.rootPage = MyLifePlanPage;
    } else if(isEmailVerified == "Not") {
      this.rootPage = EmailVerifyPage;
    } else {
      this.rootPage = LoginPage;
    }
  }

}
