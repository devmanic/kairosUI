import { Component, OnInit } from '@angular/core';
import { SdkService } from '../../shared/sdk.servive';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html'
})
export class GalleryListComponent implements OnInit {
  list: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor(private sdk: SdkService) {
    this.sdk.galleryList.subscribe((res: any) => this.list.next(res));
  }

  ngOnInit() {
  }

}
