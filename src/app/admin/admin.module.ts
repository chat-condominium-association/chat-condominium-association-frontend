import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [StartComponent, RoomsComponent, ChatComponent],
  imports: [CommonModule, SharedModule, RouterModule, AdminRoutingModule],
})
export class AdminModule {}
