import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-info-nav',
  templateUrl: './main-info-nav.component.html',
  styleUrls: ['./main-info-nav.component.scss'],
})
export class MainInfoNavComponent {
  @Input() username!: string;
  @Input() avatarSrc!: string;
}
