import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TitleService {
  private _title: BehaviorSubject<string> = new BehaviorSubject('');
  title: Observable<string> = this._title.asObservable();

  setTitle(title: string) {
    this._title.next(!!title && typeof title === 'string' ? title : null);
  }

  constructor() {
  }
}
