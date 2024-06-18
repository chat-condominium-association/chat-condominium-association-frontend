import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { loadRoomsInfoAction } from '@store/entities/roomsByID/roomsByID.actions';
import { PagesNavComponent } from '@chats/components/pages-nav/pages-nav.component';
import { RouterOutlet } from '@angular/router';
import { MainInfoNavComponent } from '@chats/components/main-chats-nav/main-chats-nav.component';
import { AsideControlComponent } from '@chats/components/aside-control/aside-control.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  standalone: true,
  imports: [
    PagesNavComponent,
    RouterOutlet,
    MainInfoNavComponent,
    AsideControlComponent,
  ],
})
export class BaseComponent implements OnInit {
  private store = inject(Store<StoreState>);
  ngOnInit(): void {
    this.store.dispatch(loadRoomsInfoAction());
  }
}
