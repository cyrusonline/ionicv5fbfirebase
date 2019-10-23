import { Component } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  login() {
    alert('login')
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(result=>{
      alert(JSON.stringify(result))
    })
    .catch(err=>{
      alert(JSON.stringify(err))
    })
  }
}
