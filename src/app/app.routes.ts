export const AppRoutes = [
  {
    path: '',
    redirectTo: '/gallery/list',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'gallery/404'}
];
