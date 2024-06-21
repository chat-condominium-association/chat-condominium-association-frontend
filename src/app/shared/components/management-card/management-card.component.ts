import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCardComponent {}
