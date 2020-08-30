import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private afs: AngularFirestore) { 


  }

  test(){
    this.afs.collection('test').add({name:'test',surname:'testsurnma'});
  }

  sendMessage(data){
    this.afs.collection('mesaj').add({...data})
  }
}
