import { Component, Injector } from '@angular/core';
import BaseList from '../../shared/components/baseListComponent';

@Component({
  selector: 'app-gallery-list',
  template: `
    <ng-container *ngIf="!(list|async).length; else galleryListTpl;">
      <div class="alert alert-light" role="alert">
        Gallery list empty
      </div>
    </ng-container>

    <ng-template #galleryListTpl>
      <div class="list-group">
        <a *ngFor="let item of list|async"
           [routerLink]="['../', 'view',item]"
           class="list-group-item list-group-item-action">{{item}}</a>
      </div>
    </ng-template>
  `
})
export class GalleryListComponent extends BaseList {

  constructor(injector: Injector) {
    super(injector);
    this._subscribers.push(
      this.sdk.galleryList.subscribe((res: any) => this.list.next(res))
    );
    this.title = 'Gallery List';
  }

}
