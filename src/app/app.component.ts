import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDt2Yjvba1t_Ph_DrcuC07IAtl4IzTH5Sw'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
