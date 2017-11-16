import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable()
export default class LoaderService {
  private _isShow: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isShow: Observable<boolean> = this._isShow.asObservable();

  private _delay: 1000;

  show() {
    this._isShow.next(true);
  }

  hide() {
    setTimeout(() => {
      this._isShow.next(false);
    }, this._delay);
  }
}
