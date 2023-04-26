import { Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class LoginGuardian {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate():
        Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            alert("Acceso de administrador requerido");
            return false;
        }else{
        // logged in, so return true
            return true;
        }
    }
}