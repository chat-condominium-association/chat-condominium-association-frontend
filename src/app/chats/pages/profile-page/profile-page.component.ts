import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { setAsideStateAction } from '@store/ui/components/components.actions';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    // this.store.dispatch(setAsideStateAction({ state: AsidePanel.Profile }));
  }
}
