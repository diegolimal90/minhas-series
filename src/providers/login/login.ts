import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// We MUST import both the firebase AND firestore modules like so
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class LoginProvider {
   private PATH = '/usuario';
   private db: any;
   constructor(public http: HttpClient) {
      // Initialise access to the firestore service
      this.db = firebase.firestore();
   }

   getLogin(email: string, senha: string): Promise<any> {
      return new Promise((resolve, reject) => {
         this.db.collection("/usuario")
            .where("email", "==", email)
            .where("senha", "==", senha)
            .get()
            .then((querySnapshot) => {
               // Declare an array which we'll use to store retrieved documents
               let obj: any = [];
               // Iterate through each document, retrieve the values for each field
               // and then assign these to a key in an object that is pushed into the
               // obj array
               querySnapshot
                  .forEach((doc: any) => {
                     obj.push({
                        id: doc.id,
                        email: doc.data().email,
                        nome: doc.data().nome,
                        senha: doc.data().senha
                     });
                  });
               // Resolve the completed array that contains all of the formatted data
               // from the retrieved documents
               if (obj.length > 0) {
                  if (obj[0].email == email && obj[0].senha == senha) {
                     resolve(obj);
                  }
               }
               resolve(obj);
            })
            .catch((error: any) => {
               reject(error);
            });
      });
   }
}
