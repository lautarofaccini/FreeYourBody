import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FreeYourBody';

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyBvhi5S4vM9usz97vbRfwbIERtp0l3zOEw",
      authDomain: "freeyourbody.firebaseapp.com",
    });

  }

}
