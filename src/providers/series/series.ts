import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerieDTO } from '../../models/serie.dto';
import * as firebase from 'firebase';

/*
  Generated class for the SeriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeriesProvider {
  PATH = "series";
  db: any;

  constructor(public http: HttpClient) {
    // Initialise access to the firestore service
    this.db = firebase.firestore();
  }

  getSeries(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.PATH)
        .get()
        .then((querySnapshot) => {
          let array: any = [];
          
          if (querySnapshot) {
            querySnapshot
              .forEach((doc: any) => {
                array.push({
                  id: doc.id,
                  nome: doc.data().nome,
                  foto: doc.data().foto,
                  descricao: doc.data().descricao
                })

              });
            resolve(array)
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  getSerie(serie: SerieDTO): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.PATH)
        .doc(serie.id)
        .get()
        .then((querySnapshot) => {
          let array: any = [];
          
          if (querySnapshot) {
            querySnapshot
              .forEach((doc: any) => {
                array.push({
                  id: doc.id,
                  nome: doc.data().nome,
                  foto: doc.data().foto,
                  descricao: doc.data().descricao
                })

              });
            resolve(array)
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  salvarSeries(serie: SerieDTO) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.PATH).add({
        nome: serie.nome,
        descricao: serie.descricao,
        foto: serie.foto
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    });
  }

  atualizarSeries(serie: SerieDTO) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.PATH).doc(serie.id).set({
        nome: serie.nome,
        descricao: serie.descricao,
        foto: serie.foto
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    });
  }

  excluirSerie(serie: SerieDTO) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.PATH).doc(serie.id).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    });
  }
}
