import { Component, Injector, OnInit } from '@angular/core';
import BaseList from '../../shared/components/baseListComponent';

@Component({
  selector: 'app-subject-view',
  template: `
    <div class="row" style="margin-bottom: 15px;">
      <div class="col-sm-9">
        <p>Faces:</p>
      </div>
      <div class="col-sm-3 text-right">
        <button type="button" (click)="confirmDelete()" class="btn btn-sm btn-outline-danger">Delete Subject</button>
      </div>
    </div>
    <ng-container *ngIf="!(list|async).length; else listTpl;">
      <div class="alert alert-light" role="alert">
        Faces list empty
      </div>
    </ng-container>
    <ng-template #listTpl>
      <ul class="list-group">
        <li *ngFor="let item of list|async; trackBy:trackByFn;"
            class="list-group-item">
          <div class="row">
            <div class="col-sm-8">
              {{item.face_id}}
            </div>
            <div class="col-sm-4 text-right">
              <small class="text-muted">{{item.enrollment_timestamp | date:'fullDate'}}</small>
            </div>
          </div>
        </li>
      </ul>
    </ng-template>
  `
})
export class SubjectViewComponent extends BaseList {
  galleryID: string;
  subjectID: string;

  constructor(injector: Injector) {
    super(injector);

    this.galleryID = this.route.params['value'].gallery_id;
    this.subjectID = this.route.params['value'].subject_id;
    this.title = `${this.galleryID}: ${this.subjectID}`;

    this.sdk.getSubjectView(this.galleryID, this.subjectID)
      .subscribe((res: any[]) => {
        this.list.next(res);
      }, () => {
        this.router.navigate(['../'], {relativeTo: this.route});
      });
  }

  confirmDelete() {
    this.modalManager.show({
      type: 'warning',
      title: `Are you sure ?`,
      content: `Subject: <strong class="text-bold">${this.subjectID}</strong> will be deleted !`
    }, () => this.deleteSubject.bind(this)());
  }

  deleteSubject() {
    this.sdk.deleteSubject(this.galleryID, this.subjectID)
      .subscribe((res: any) => this.onSuccessDeleteSubject.bind(this)(res));
  }

  onSuccessDeleteSubject(res) {
    this.toastManager.success(res);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
