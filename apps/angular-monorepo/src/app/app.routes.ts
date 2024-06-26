import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () => import('@angular-monorepo/products').then((c) => c.ProductListComponent)
  },
  {
    path: 'orders',
    loadComponent: () => import('@angular-monorepo/orders').then((c) => c.OrderListComponent)
  }
];
