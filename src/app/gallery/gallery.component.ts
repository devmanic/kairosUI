import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-component',
  template: `
    <router-outlet></router-outlet>
  `
})

export class GalleryComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
