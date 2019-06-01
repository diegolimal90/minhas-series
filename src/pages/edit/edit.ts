import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieDTO } from '../../models/serie.dto';
import { SeriesProvider } from '../../providers/series/series';
import { HomePage } from '../home/home';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  serie: SerieDTO = {
    id: "",
    nome: "",
    descricao: "",
    foto: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private serieProvider: SeriesProvider) {
    this.serie = navParams.get("serie");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  salvar() {
    this.serieProvider.atualizarSeries(this.serie);
    this.navCtrl.push(HomePage)
  }
}
