import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiError } from '@core/models/api.inetrface';
import { Store } from '@ngrx/store';
import { editRoomAction } from '@store/entities/roomsByID/roomsByID.actions';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import {
  selectRoomErrorByID,
  selectRoomLoadingByID,
  selectRoomsData,
} from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private store = inject(Store);
  private fb = inject(FormBuilder);

  roomsData$: Observable<Rooms> = this.store.select(selectRoomsData);

  buildEditRoomForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  editRoom(roomID: number, name: string): void {
    this.store.dispatch(editRoomAction({ roomID, editData: { name } }));
  }

  getRoomLoadingState(roomID: number): Observable<boolean> {
    return this.store.select(selectRoomLoadingByID(roomID));
  }

  getErrorState(roomID: number): Observable<ApiError | null> {
    return this.store.select(selectRoomErrorByID(roomID));
  }
}
