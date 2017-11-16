import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'gallery-component',
  template: `
    <app-navbar></app-navbar>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})

export class GalleryComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
