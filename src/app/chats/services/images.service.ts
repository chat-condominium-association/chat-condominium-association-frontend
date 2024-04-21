import { Injectable } from '@angular/core';
import { avatars } from '@shared/data/avatars.images';
import { UserData } from '@store/entities/user/user.interface';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private avatars$: Observable<typeof avatars> = of(avatars);

  getAvatarSrc(userImageID: number | null): Observable<string> {
    const id = userImageID || 0;

    return this.avatars$.pipe(map(avatars => avatars[id as keyof typeof avatars]));
  }

  getAvatars(): Observable<typeof avatars> {
    return this.avatars$;
  }
}
