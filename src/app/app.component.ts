import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes - Projet Info 7 Dumortier Tristan';

  /*constructor() {
    const config = {
      apiKey: 'AIzaSyCLTiMZ7Y0xXwFI1dj0p-QmDaaElYqnvmY',
      authDomain: 'angulartourofheroesdumortit.firebaseapp.com',
      databaseURL: 'https://angulartourofheroesdumortit.firebaseio.com',
      projectId: 'angulartourofheroesdumortit',
      storageBucket: 'angulartourofheroesdumortit.appspot.com',
      messagingSenderId: '9281393864',
      appId: '1:9281393864:web:4b168efa0a4ea6e61a41fd',
      measurementId: 'G-QFM1SRHWJN'
    };
    firebase.initializeApp(config);
    firebase.analytics();
  }*/
}
