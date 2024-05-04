import { Component, EventEmitter, Input, Output } from '@angular/core';

type Button = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() customClass = 'default-btn';
  @Input() type: Button = 'button';
  @Input() disabled = false;
  @Output() buttonClick: EventEmitter<Event> = new EventEmitter<Event>();

  onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
