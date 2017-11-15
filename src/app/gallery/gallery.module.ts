import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routes';
import { GalleryGuard } from './gallery.guard';
import { CredentialsService } from '../shared/credentials.service.ts';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes)
  ],
  providers: [GalleryGuard, CredentialsService],
  declarations: [GalleryListComponent, GalleryComponent]
})
export class GalleryModule {
}
