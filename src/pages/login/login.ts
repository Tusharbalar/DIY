import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  loading: Loading;
  registerCredentials = {email: '', password: ''};
 
  constructor(private nav: NavController,
              private auth: AuthService,
              public appCtrl: App,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) { }
 
  public createAccount() {
  }
 
  public login() {
    this.appCtrl.getRootNav().setRoot(SignupPage);
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}