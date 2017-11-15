import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastService } from 'admanic-ui';
import { CredentialsService } from '../shared/credentials.service.ts';

@Injectable()
export class GalleryGuard implements CanActivate {
  constructor(
    private credsManager: CredentialsService,
    private router: Router,
    private toastManager: ToastService) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.credsManager.isValidCredentials) {
      this.toastManager.warning('Please, set valid credentials');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
