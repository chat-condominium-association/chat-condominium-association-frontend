import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [ngClass]="iconId"
    class="icon"
    [style.width]="customSize"
    [style.height]="customSize"
  >
    <use [attr.xlink:href]="iconPath"></use>
  </svg>`,
  styleUrls: ['./svg-icon.component.scss'],
})

//make host binding for width and height if customSize passed
export class SvgIconComponent {
  @Input() iconId!: string;
  @Input() customSize?: string;
  get iconPath(): string {
    return `${environment.svgSpriteUrl}/assets/sprite.svg#${this.iconId}`;
  }
}
