import { Component, inject, OnInit } from '@angular/core';
import { RouterService } from '@core/services/router.service';
import { Store } from '@ngrx/store';
import { loadUserAction } from '@store/entities/user/user.actions';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    NgIf,
  ],
})
export class AppComponent implements OnInit {
  private store: Store = inject(Store);
  protected routerService: RouterService = inject(RouterService);

  ngOnInit(): void {
    this.store.dispatch(loadUserAction());
    this.routerService.init();
  }
}
