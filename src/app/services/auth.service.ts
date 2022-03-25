import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  RegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }

  constructor() { }
}
