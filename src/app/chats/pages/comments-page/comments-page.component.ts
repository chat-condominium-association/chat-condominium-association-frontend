import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { setAsideStateAction } from '@store/ui/components/components.actions';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss'],
})
export class CommentsPageComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    // this.store.dispatch(setAsideStateAction({ state: AsidePanel.Hidden }));
  }
}
