import { AbstractControl } from '@angular/forms';

export type RequiredInputType = {
  css: 'control-form' | 'control-single';
  name: string;
};

export type OptionalInputType = {
  id: string;
  control: AbstractControl | null;
  placeholder: string;
  isRequired: boolean;
  label: string | undefined;
  icons: string[];
};

export type InputType = RequiredInputType & Partial<OptionalInputType>;
