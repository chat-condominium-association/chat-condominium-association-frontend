import { Component, Input } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-svg-icon',
  template: `<svg [ngClass]="iconId" class="icon"><use [attr.xlink:href]="iconPath"></use></svg>`,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  @Input() iconId!: string;
  get iconPath(): string {
    return `${environment.svgSpriteUrl}/assets/sprite.svg#${this.iconId}`;
  }
}
