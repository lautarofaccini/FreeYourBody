import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
NavbarComponent

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = 'FreeYourBody';
  
  constructor() { }

  ngOnInit(): void {
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
}
