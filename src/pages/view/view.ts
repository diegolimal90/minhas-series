import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieDTO } from '../../models/serie.dto';
import { EditPage } from '../edit/edit';
import { SeriesProvider } from '../../providers/series/series';
import { HomePage } from '../home/home';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  serie: SerieDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private provider: SeriesProvider) {
    this.serie = navParams.get("serie");
  }

  ionViewDidLoad() {
  }

  editar(){
    this.navCtrl.push(EditPage, {serie: this.serie})
  }

  excluir(){
    this.provider.excluirSerie(this.serie)
    this.navCtrl.setRoot(HomePage)
  }
}
