import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { VerifyPage } from './verify/verify';

@Component({
  selector: 'page-email-verify',
  templateUrl: 'verify.html'
})

export class EmailVerifyPage {

  public email;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    this.email = navParams.get("email").mobile;
    console.log("DSDS", this.email)
  }

}