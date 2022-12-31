import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
// import { Token } from '../store/mutation'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userRoleIn = '';
  constructor(private loginService: LoginService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
    return this.checkLogin(route,url);
  }
  checkLogin(route: ActivatedRouteSnapshot,url : any): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
      if(token){
          const userRole = this.loginService.getRole();
          this.userRoleIn = userRole;
          if(role === 'ROLE_EMPLOYEE'){
            return true 
          }
          else if(role === 'ROLE_APPLICANT'){
              return true
          }
          else if(role === 'ROLE_INSTRUCTOR'){
            return true
          }
          else{
            return false
          }
      }
      else{
        return false;
      }
  }

}
