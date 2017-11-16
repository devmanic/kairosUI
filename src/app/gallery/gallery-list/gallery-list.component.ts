import { Component, Injector, OnInit } from '@angular/core';
import BaseList from "../../shared/components/baseListComponent";

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html'
})
export class GalleryListComponent extends BaseList {

  constructor(injector: Injector) {
    super(injector);
    this.sdk.galleryList.subscribe((res: any) => this.list.next(res));
  }

}
