import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { avatars } from '@shared/data/avatars.images';
import { StoreState } from '@store/app.state.interface';
import { loadRoomsInfoAction } from '@store/entities/roomsByID/roomsByID.actions';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  private store = inject(Store<StoreState>);
  ngOnInit(): void {
    this.store.dispatch(loadRoomsInfoAction());
  }
}
