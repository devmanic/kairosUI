import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { CredentialsService } from './credentials.service.ts';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastService } from 'admanic-ui';

@Injectable()
export class SDKInceptor implements HttpInterceptor {
  private readonly api_host: string = 'https://api.kairos.com/';

  constructor(private credsManager: CredentialsService, private router: Router, private toastManager: ToastService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      url: `${this.api_host}${request.url}`,
      setHeaders: {
        'Content-type': 'application/json',
        ...this.credsManager.credentials
      }
    });

    return next.handle(authReq).do(() => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse {
        this.toastManager.error(err.message);
        if (err.status === 403 || err.status === 0) { // todo: check if it necessary
          this.router.navigate(['./login']);
        }
      }
    });

  }
}
