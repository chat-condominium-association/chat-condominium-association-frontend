import { style, animate, animation, keyframes } from '@angular/animations';

export enum AnimationType {
  Slide = 'slide',
}

export const slideIn = animation([
  animate(
    '{{time}} cubic-bezier(0.33, 1, 0.68, 1)',
    keyframes([
      style({ transform: 'translateX(-100%)', opacity: 0.7, offset: 0 }),
      style({ transform: 'translateX(0%)', opacity: 1, offset: 1 }),
    ])
  ),
]);

export const slideOut = animation([
  animate(
    '{{time}} cubic-bezier(0.33, 1, 0.68, 1)',
    keyframes([
      style({ transform: 'translateX(0%)', opacity: 1, offset: 0 }),
      style({ transform: 'translateX(100%)', opacity: 0.7, offset: 1 }),
    ])
  ),
]);
