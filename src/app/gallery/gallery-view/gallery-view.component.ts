import { Component, Injector } from '@angular/core';
import BaseList from '../../shared/components/baseListComponent';

@Component({
  selector: 'app-gallery-view',
  template: `
    <ng-container *ngIf="!(list|async).length; else galleryListTpl;">
      <div class="alert alert-light" role="alert">
        Gallery subject list empty
      </div>
    </ng-container>

    <ng-template #galleryListTpl>
      <div class="row">
        <div class="col-md-3 col-sm-9">
          <adm-input-container class="form-group">
            <input adm type="text" placeholder="Find in list" [(ngModel)]="query">
          </adm-input-container>
        </div>
        <div class="col-md-9 col-sm-3 text-right">
          <button type="button" (click)="confirmDelete()" class="btn btn-sm btn-outline-danger">Delete Gallery</button>
        </div>
      </div>
      <p>Subjects:</p>
      <div class="list-group">
        <a *ngFor="let item of list|async|listFilter:query; trackBy:trackByFn;"
           [routerLink]="['../', galleryID, item]"
           class="list-group-item list-group-item-action">{{item}}</a>
      </div>
    </ng-template>

  `
})
export class GalleryViewComponent extends BaseList {
  query: string = '';
  galleryID: string;

  constructor(injector: Injector) {
    super(injector);
    this.galleryID = this.route.params['value'].gallery_id;

    this._subscribers.push(
      this.sdk.getGalleryView(this.galleryID)
        .subscribe((res: string[]) => this.list.next(res), () => {
          this.router.navigate(['../../'], {relativeTo: this.route});
        })
    );


    this.title = `${this.galleryID}`;
  }

  confirmDelete() {
    this.modalManager.show({
      type: 'warning',
      title: `Are you sure ?`,
      content: `Gallery: <strong class="text-bold">${this.galleryID}</strong> will be deleted !`
    }, () => this.deleteSubject.bind(this)());
  }

  deleteSubject() {
    this.sdk.deleteGallery(this.galleryID)
      .subscribe((res: any) => this.onSuccessDeleteSubject.bind(this)(res));
  }

  onSuccessDeleteSubject(res) {
    this.toastManager.success(res);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
