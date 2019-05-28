import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import { LoginProvider } from '../../providers/login/login';
// import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;
  logins: Promise<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
    private provider: LoginProvider) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });

  }

  ionViewDidLoad() {
  }

  login() {
    let { email, password } = this.loginForm.controls;
    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }
      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword = "Ops! Email inválido";
      } else {
        this.messagePassword = "";
      }
    }else{
      this.logins = this.provider.getLogin(email.value, password.value);
      console.log(this.logins)
    }
  }

}
