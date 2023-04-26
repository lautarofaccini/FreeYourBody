import { Component, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService){
  
  }

  

  @HostListener("document:scroll")
  handleScroll(){
    if (document.documentElement.scrollTop > 15){
      console.log('scrollTop',)
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
