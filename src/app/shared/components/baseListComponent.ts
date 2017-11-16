import { Injectable, Injector } from '@angular/core';
import { SdkService } from '../sdk.servive';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from '../title.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalManagerService, ToastService } from 'admanic-ui';
import { Subscription } from 'rxjs/Subscription';

@Injectable()

export default class BaseList {
  list: BehaviorSubject<string[]> = new BehaviorSubject([]);
  sdk: SdkService;
  titleService: TitleService;
  router: Router;
  route: ActivatedRoute;
  toastManager: ToastService;
  modalManager: ModalManagerService;
  title: string = '';

  _subscribers: Subscription[] = [];

  constructor(public injector: Injector) {
    this.sdk = injector.get(SdkService);
    this.titleService = injector.get(TitleService);
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
    this.toastManager = injector.get(ToastService);
    this.modalManager = injector.get(ModalManagerService);
  }

  ngAfterViewInit() {
    this.titleService.setTitle(this.title);
  }

  ngOnDestroy() {
    this.titleService.setTitle('');
    this._subscribers.forEach(el => {
      if (el instanceof Subscription) {
        el.unsubscribe();
      }
    });
  }

  trackByFn(item, index) {
    return index;
  }
}
