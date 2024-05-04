import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  //   return (formGroup: AbstractControl) => {
  //     console.log('matchValidator called');

  //     const control = formGroup.get(controlName);
  //     const matchingControl = formGroup.get(matchingControlName);
  // console.log(control);
  // console.log(matchingControl);

  //     if (!control || !matchingControl) {
  //       return null;
  //     }

  //     const mismatch = control.value !== matchingControl.value;
  //     console.log(mismatch);

  //     if (mismatch) {
  //       matchingControl.setErrors({ mismatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }

  //     return mismatch ? { mismatch: true } : null;
  //   };
  return (group: AbstractControl) => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    // return if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors['mismatch']) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mismatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
