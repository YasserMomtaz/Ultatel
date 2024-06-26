import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.loginService.IsLogged)
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Unauthorized access - maybe you need to log in?'
        });
        this.router.navigateByUrl("");
      }
      
      return true;
  }
  
}
