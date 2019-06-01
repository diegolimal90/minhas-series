import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import { LoginProvider } from '../../providers/login/login';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { UserDTO } from '../../models/user.dto';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/Storage';

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
  user: UserDTO;
  creds: CredenciaisDTO = {
    email: "",
    senha:""
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
    private provider: LoginProvider, private storage: Storage) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });

  }

  ionViewDidLoad() {
    if(this.storage.get("usuario")){
      this.navCtrl.setRoot(HomePage);
    }
  }

  login() {
    this.provider.getLogin(this.creds).then((data) => {
      this.user = data
      this.storage.set("usuario", this.user);
    }).catch((error) => {
      console.log(error)
    });
    if (this.storage.get("usuario")){
      this.navCtrl.setRoot(HomePage);
    }
  }

}
