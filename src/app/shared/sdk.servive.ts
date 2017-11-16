import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SdkService {

  constructor(public http: HttpClient) {
  }

  get galleryList() {
    return this.http.post(`gallery/list_all`, {}).map(res => res.gallery_ids);
  }

  getGalleryView(gallery_name: string) {
    if (!gallery_name || typeof gallery_name !== 'string') {
      return Observable.throw('Gallery name required');
    }
    return this.http.post('gallery/view', {gallery_name}).map(res => res.subject_ids);
  }
}
