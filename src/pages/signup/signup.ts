import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { VerifyPage } from './verify/verify';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styles: [`
    .select-avatar{
      border-top:3px solid black;
      border-bottom:3px solid black;
      overflow: auto;
      white-space: nowrap;
    }
    .avatar-icon{
      display: inline-block;
      color: black;
      font-size:2.2em;
      text-align: center;
      padding: 14px;
      text-decoration: none;
    }
    .avatar-icon:hover{
      background-color: #777;
      color:white;
    }
  `]
})

export class SignupPage {

  signup = {};

  constructor(public navCtrl: NavController) {

  }

  aa() {
    console.log("yesss");
    this.signup["mobile"] = "+1 ";
  }

  onSubmit() {
    this.navCtrl.push(VerifyPage, {
      signup: this.signup
    });
  }

  logos = [
    { 'name':'people' },
    { 'name':'logo-twitter' }, 
    { 'name': 'close' }
  ];

  name;

  iconClick(logo) {
    this.name = logo.name;
    console.log(logo)
  }

}