import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRoomsInfoAction } from '@store/entities/roomsByID/roomsByID.actions';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(loadRoomsInfoAction());
  }
}
