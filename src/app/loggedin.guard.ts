import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  canActivateChild(

  ): Observable<boolean> | Promise<boolean> | boolean{
    if(localStorage.getItem('loginStatus') == 'true')
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
