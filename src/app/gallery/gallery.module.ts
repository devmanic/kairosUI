import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routes';
import { GalleryGuard } from './gallery.guard';
import { CredentialsService } from '../shared/credentials.service.ts';
import { GalleryComponent } from './gallery.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { ListFilterPipe } from '../shared/list-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SubjectViewComponent } from './subject-view/subject-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputModule, ModalModule } from 'admanic-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes),
    InputModule,
    ModalModule,
    FormsModule
  ],
  providers: [
    GalleryGuard,
    CredentialsService
  ],
  declarations: [
    GalleryListComponent,
    GalleryComponent,
    GalleryViewComponent,
    ListFilterPipe,
    SubjectViewComponent,
    NavbarComponent
  ]
})
export class GalleryModule {
}
