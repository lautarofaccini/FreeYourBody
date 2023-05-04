import { Component, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService, private router: Router){
  
  }

  isInAdmin(){
    return this.router.url == '/admin' ? true : false;
  }

  toMain(){
    document.getElementById("main")?.scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }

  toLocation(){
    document.getElementById("location")?.scrollIntoView({behavior:"smooth"});
  }

  toBuy(){
    document.getElementById("buy")?.scrollIntoView({behavior:"smooth"});
  }

  @HostListener("document:scroll")
  handleScroll(){
    if (document.documentElement.scrollTop > 15){
      console.log(this.router.url)
      document.getElementsByTagName('nav')[0].classList.add('OnScroll')
      //OnScroll
    } else {
      console.log('scrollDown')
      document.getElementsByTagName('nav')[0].classList.remove('OnScroll')
      //OnTop
    }
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }

  logout(){
    this.authService.logout()
  }

}
