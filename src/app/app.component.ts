import { Component, OnInit, inject } from '@angular/core';
import { RouterService } from '@core/services/router.service';
import { Store } from '@ngrx/store';
import { loadUserAction } from '@store/entities/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  protected routerService = inject(RouterService);

  ngOnInit(): void {
    this.store.dispatch(loadUserAction());
    this.routerService.init();
  }
}
