import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams, ToastController, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { VerifyPage } from './verify/verify';
import { MyLifePlanPage } from '../../my-life-plan/plan';

@Component({
  selector: 'page-email-verify',
  templateUrl: 'verify.html'
})

export class EmailVerifyPage {

  public email;

  constructor(public navParams: NavParams,
              public appCtrl: App,
              public toastCtrl: ToastController,
              public navCtrl: NavController) {
    this.email = navParams.get("email");
  }

  ionViewWillEnter() {
    localStorage.setItem("emailVerify", "Not");

  }

  emailVerify() {
    localStorage.setItem("emailVerify", "true");
    let toast = this.toastCtrl.create({
      message: 'Congratulation! Your email is verified',
      duration: 5000
    });
    toast.present();
    this.appCtrl.getRootNav().setRoot(MyLifePlanPage);
  }

}