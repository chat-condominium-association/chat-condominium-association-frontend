import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiError } from '@core/models/api.inetrface';
import { Store, select } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { editRoomAction } from '@store/entities/roomsByID/roomsByID.actions';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import {
  roomErrorByIDSelector,
  roomLoadingByIDSelector,
  roomsDataSelector,
} from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private store = inject(Store<StoreState>);
  private fb = inject(FormBuilder);

  roomsData$: Observable<Rooms> = this.store.pipe(select(roomsDataSelector));

  buildEditRoomForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  editRoom(roomID: number, name: string): void {
    this.store.dispatch(editRoomAction({ roomID, editData: { name } }));
  }

  getRoomLoadingState(roomID: number): Observable<boolean> {
    return this.store.pipe(select(roomLoadingByIDSelector(roomID)));
  }

  getErrorState(roomID: number): Observable<ApiError | null> {
    return this.store.pipe(select(roomErrorByIDSelector(roomID)));
  }
}
