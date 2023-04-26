import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { LoginComponent } from './navbar/login/login.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './services/login-guardian';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Pagina404Component,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
