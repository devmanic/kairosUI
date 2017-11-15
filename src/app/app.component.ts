import { Component, ViewContainerRef } from '@angular/core';
import { ToastService } from 'admanic-ui';

@Component({
  selector: 'app-kairos-ui',
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(toastManager: ToastService, vcr: ViewContainerRef) {
    toastManager.setRootViewContainerRef(vcr);
  }
}
