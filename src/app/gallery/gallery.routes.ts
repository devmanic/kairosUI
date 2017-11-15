import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryGuard } from './gallery.guard';
import { GalleryComponent } from './gallery.component';

export const GalleryRoutes = [
  {
    path: 'gallery',
    canActivate: [GalleryGuard],
    children: [
      {
        path: '',
        redirectTo: 'list',
        // component: GalleryComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'list',
        component: GalleryListComponent
      }
    ]

  }
];
