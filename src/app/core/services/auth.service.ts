import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  isAdminLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn = new BehaviorSubject(false);

  // this.authService.getToken().subscribe(val => console.log(val));
  // this.authService.getUserInfo().subscribe(val => console.log(val));

  handleAdminSignIn(): void {
    //set data?
    // this.localStorageService.set('userData', userData);
    this.isAdminLoggedIn.next(true);
    // this.router.navigate(['/']);
    // this.getUserID();
  }
  handleUserSignIn(): void {
    //set data?
    // this.localStorageService.set('userData', userData);
    this.isUserLoggedIn.next(true);
    // this.router.navigate(['/']);
    // this.getUserID();
  }
}
