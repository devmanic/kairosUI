import { Component, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import BaseList from "../../shared/components/baseListComponent";

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html'
})
export class GalleryViewComponent extends BaseList {

  constructor(injector: Injector, private route: ActivatedRoute) {
    super(injector);
    this.sdk.getGalleryView(this.route.params.value.id)
      .subscribe((res: string[]) => this.list.next(res), () => history.back());
  }
}
