import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SdkService {

  constructor(public http: HttpClient) {
  }

  get galleryList() {
    return this.http.post(`gallery/list_all`, {}).map(res => res.gallery_ids);
  }
}
