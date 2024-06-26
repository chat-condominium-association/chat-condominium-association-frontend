import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '@shared/components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBar = inject(MatSnackBar);

  showSnackbar(
    message = 'Oops... Temporary Server Error :(',
    // style = NotifyStyles.Success,
    duration = 2000
  ): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      // duration: 1000,
      data: { message: message },
    });
  }
}
