import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeriesProvider } from '../../providers/series/series';
import { FormPage } from '../form/form';
import { ViewPage } from '../view/view';
import { Storage } from '@ionic/Storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  series: any;

  constructor(public navCtrl: NavController, private provider: SeriesProvider, private storage: Storage) {
    
  }

  ionViewDidLoad() {
    this.series = this.provider.getSeries();
  }

  ionViewDidEnter(){  
  }

  novaSerie(){
    this.navCtrl.push(FormPage)
  }

  verSerie(serie){
    this.navCtrl.push(ViewPage, {serie: serie});
  }
  resetLocalStorage(){
    this.storage.remove("usuario");
    this.navCtrl.setRoot(LoginPage);
  }
 
}
