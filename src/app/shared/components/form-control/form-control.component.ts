/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { InputType } from '@shared/models/input.interface';
import { LengthErrorMessage, PatternErrorMessage } from '@shared/models/validator.interface';
import { errorMessages } from '@shared/validators/validator-messages';
import { Icons } from '@shared/enums/icons.enum';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    AsyncPipe,
    SvgIconComponent,
    NgForOf,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements InputType, OnInit {
  @Input() type = '';
  @Input() label: string | undefined;
  @Input() css: InputType['css'] = 'control-form';
  @Input() placeholder = '';
  @Input() control: AbstractControl | null = null;
  @Input() name!: string;
  @Input() isRequired = false;
  @Input() iconsUrl: InputType['icons'] = [];

  icon = Icons;

  ngOnInit(): void {
    this.isInputFilled$ = this.control?.valueChanges.pipe(map(x => !!x));
  }

  protected currentIconIndex = 0;
  protected isInputFilled$: Observable<boolean> | undefined = undefined;

  togglePassVisibility(): void {
    this.type = this.type === 'text' ? 'password' : 'text';
    this.currentIconIndex = this.currentIconIndex === 0 ? 1 : 0;
  }

  isInvalid(): boolean {
    const isControlInvalidAndTouched =
      !!this.control && this.control.invalid && (this.control.dirty || this.control.touched);

    return isControlInvalidAndTouched;
  }

  resetField(): void {
    this.control?.setValue('');
  }

  getErrorMessage(key: string, value: LengthErrorMessage | PatternErrorMessage): string {
    const errorMessageOrFunction = errorMessages(this.name)[key];
    return errorMessageOrFunction(value);
  }

  get errors(): string[] {
    const errorMessages: string[] = [];
    if (this.control?.errors) {
      Object.entries(this.control.errors).forEach(([key, value]) => {
        const errorMessage = this.getErrorMessage(key, value);
        console.log(errorMessage);
        errorMessages.push(errorMessage);
      });
    }
    return errorMessages;
  }
}
