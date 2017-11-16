import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { CredentialsService } from "./credentials.service.ts";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { ToastService } from "admanic-ui";
import LoaderService from "./loader.service";

@Injectable()
export class SDKInceptor implements HttpInterceptor {
  private readonly api_host: string = 'https://api.kairos.com/';

  constructor(private credsManager: CredentialsService,
              private loaderService: LoaderService,
              private router: Router,
              private toastManager: ToastService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      url: `${this.api_host}${request.url}`,
      setHeaders: {
        'Content-type': 'application/json',
        ...this.credsManager.credentials
      }
    });

    this.loaderService.show();
    return next.handle(authReq).do((response) => {
      if (response instanceof HttpResponse) {
        this.loaderService.hide();
        if (response.body.hasOwnProperty('Errors') && Array.isArray(response.body.Errors) && response.body.Errors.length) {
          this.toastManager.error(response.body.Errors[0].Message);
          throw Observable.throw(response.body);
        }
      }
    }, (err: any) => {
      this.loaderService.hide();
      if (err instanceof HttpErrorResponse {
        this.toastManager.error(err.message);
        if (err.status === 403 || err.status === 0) { // todo: check if it necessary
          this.router.navigate(['./login']);
        }
      }
    });

  }
}
