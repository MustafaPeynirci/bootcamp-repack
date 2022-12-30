import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { Token } from '../store/mutation'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
          if(role === 'ROLE_EMPLOYEE'){
            return true 
          }
          if(role === 'ROLE_APPLICANT'){
              return true
          }
          if(role === 'ROLE_INSTRUCTOR'){
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
