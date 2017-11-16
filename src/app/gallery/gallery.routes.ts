import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryGuard } from './gallery.guard';
import { GalleryComponent } from './gallery.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { SubjectViewComponent } from './subject-view/subject-view.component';
import { Page404Component } from '../shared/components/404-pate.component';

export const GalleryRoutes = [
  {
    path: 'gallery',
    canActivate: [GalleryGuard],
    component: GalleryComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },
      {
        path: 'list',
        component: GalleryListComponent
      },
      {
        path: 'view',
        children: [
          {path: ':gallery_id', component: GalleryViewComponent}
        ]
      },
      {
        path: 'view/:gallery_id/:subject_id',
        component: SubjectViewComponent
      },
      {path: '404', component: Page404Component}
    ]

  }
];
