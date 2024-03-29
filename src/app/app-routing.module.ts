import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { AppRoutes } from '@core/enums/routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.START_PAGE_ROUTE,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: AppRoutes.ADMIN_BASE_ROUTE,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
