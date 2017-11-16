import { Injectable, Injector } from "@angular/core";
import { SdkService } from "../sdk.servive";
import { BehaviorSubject } from "rxjs";
@Injectable()

export default class BaseList {
  list: BehaviorSubject<string[]> = new BehaviorSubject([]);
  sdk: SdkService;

  constructor(public injector: Injector) {
    this.sdk = injector.get(SdkService);
  }
}
