import { Component, ViewContainerRef } from '@angular/core';
import { ModalManagerService, ToastService } from 'admanic-ui';

@Component({
  selector: 'app-kairos-ui',
  template: `
    <div>
      <app-loader></app-loader>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  constructor(toastManager: ToastService, vcr: ViewContainerRef, modalManager: ModalManagerService) {
    toastManager.setRootViewContainerRef(vcr);
    modalManager.setRootViewContainerRef(vcr);
  }
}
