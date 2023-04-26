import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
declare var $: any;
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private cookie:CookieService) { }

  token: string | undefined;

  login (email:string, password:string){

    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.cookie.set("token", this.token);
            $("#loginModalToggle").modal('hide');
            this.router.navigate(['/admin'])
            //navegar a la pagina de admin
          }
        )
      }
    );
  }

  logout(){
    firebase.auth().signOut().then(
      ()=>{
        
        this.token="";
        this.cookie.set("token", this.token);
        this.router.navigate(['/']);
        window.location.reload();
      }
    );
  }

  getIdToken(){
    return this.cookie.get("token");
  }
  isLoggedIn(){
    return this.cookie.get("token");
  }
}
