import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SdkService {

  constructor(public http: HttpClient) {
  }

  get galleryList() {
    return this.http.post(`gallery/list_all`, {}).map((res: { gallery_ids }) => res.gallery_ids);
  }

  getGalleryView(gallery_name: string) {
    return this.http.post('gallery/view', {gallery_name}).map((res: { subject_ids }) => res.subject_ids);
  }

  deleteGallery(gallery_name: string) {
    return this.http.post('gallery/remove', {gallery_name}).map((res: { message }) => res.message);
  }

  getSubjectView(gallery_name: string, subject_id: string) {
    return this.http.post('gallery/view_subject', {gallery_name, subject_id}).map((res: { face_ids }) => res.face_ids);
  }

  deleteSubject(gallery_name: string, subject_id: string) {
    return this.http.post('gallery/remove_subject', {
      gallery_name,
      subject_id
    }).map((res: { message }) => res.message);

  }
}
