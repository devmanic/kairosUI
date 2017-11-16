import { GalleryListComponent } from "./gallery-list/gallery-list.component";
import { GalleryGuard } from "./gallery.guard";
import { GalleryComponent } from "./gallery.component";
import { GalleryViewComponent } from "./gallery-view/gallery-view.component";

export const GalleryRoutes = [
  {
    path: 'gallery',
    canActivate: [GalleryGuard],
    component: GalleryComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: GalleryListComponent
      },
      {
        path: 'view/:id',
        component: GalleryViewComponent
      }
    ]

  }
];
