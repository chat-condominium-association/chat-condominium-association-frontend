import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { AppRoutes } from '@core/enums/routes.enum';
import { authmoduleGuard } from '@core/guards/authmodule.guard';
import { loggedInGuard } from '@core/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authmoduleGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    canActivate: [loggedInGuard],
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
