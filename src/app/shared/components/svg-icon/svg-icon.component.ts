import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `<svg [ngClass]="iconId" class="icon"><use [attr.xlink:href]="iconPath"></use></svg>`,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  @Input() iconId!: string;
  get iconPath(): string {
    return `${window.location.origin}/assets/sprite.svg#${this.iconId}`;
  }
}
