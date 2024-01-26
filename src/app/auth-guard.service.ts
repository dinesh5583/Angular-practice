import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./Router-Example/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authService:AuthService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.authService.isAuthenticated().then(
      (authenticated:any)=>{
        if(authenticated) {
          return true;
        }
        else{
          this.router.navigate(['/']);
          return false
        }
      }
    )
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this.canActivate(childRoute,state)
  }
}
