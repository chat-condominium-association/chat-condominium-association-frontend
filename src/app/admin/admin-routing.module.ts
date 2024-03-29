import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { StartComponent } from './components/start/start.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,

    children: [
      {
        path: AppRoutes.ADMIN_ROOMS_ROUTE,
        component: RoomsComponent,
      },
      {
        path: AppRoutes.ADMIN_CHAT_ROUTE,
        component: ChatComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
