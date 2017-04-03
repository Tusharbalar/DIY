import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import service
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms : {
        ios : {
          // These options are available in ionic-angular@2.0.0-beta.2 and up.
          scrollAssist: false,    // Valid options appear to be [true, false]
          autoFocusAssist: false , // Valid options appear to be ['instant', 'delay', false]
          tabsPlacement: 'bottom' // default appearance of tab is bottom
        },
        android: {
          tabsPlacement : 'bottom' // default appearance of tab is bottom
        }
        // http://ionicframework.com/docs/v2/api/config/Config/)
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
