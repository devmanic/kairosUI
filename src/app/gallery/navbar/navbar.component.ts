import { Component } from '@angular/core';
import { CredentialsService } from '../../shared/credentials.service.ts';
import { Router } from '@angular/router';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">

        <a [routerLink]="['/gallery', 'list']" class="navbar-brand">Kairos UI</a>
        <button class="navbar-toggler" type="button" (click)="toggleNavBar()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" [ngClass]="{'show':showNavbar}">
          <ul class="navbar-nav mr-auto">

          </ul>
          <div class="form-inline">
            <button class="btn btn-outline-primary btn-sm" type="button" (click)="logout()">Logout</button>
          </div>
        </div>
      </div>
    </nav>
    <br>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <ng-template [ngIf]="!!(titleService.title|async)">
            <h3 style="margin-bottom: 15px;">{{titleService.title | async}}</h3>
          </ng-template>
        </div>
      </div>
    </div>
  `
})
export class NavbarComponent {
  showNavbar: boolean;

  constructor(private credsManager: CredentialsService,
              private router: Router,
              public titleService: TitleService) {
  }

  logout() {
    this.credsManager.clear();
    this.router.navigate(['/login']);
  }

  toggleNavBar() {
    this.showNavbar = !this.showNavbar;
  }

}
