import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginGuardian } from './services/login-guardian';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'home', component: InicioComponent},
  {path: 'admin', component: AdminComponent, canActivate:[LoginGuardian]},
  {path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
