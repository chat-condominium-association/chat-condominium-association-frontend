import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-succes-new-password',
  templateUrl: './succes-new-password.component.html',
  styleUrls: ['./succes-new-password.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class SuccesNewPasswordComponent {}
