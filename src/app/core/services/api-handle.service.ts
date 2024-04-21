import { Injectable, inject } from '@angular/core';
import { ApiError } from '@core/models/api.inetrface';
import { Icons } from '@shared/enums/icons.enum';
import { ModalService } from '@shared/services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class ApiHandleService {
  private modalService = inject(ModalService);

  handleError(error: ApiError, buttonText: string): void {
    const errorMessage = error?.error?.detail || 'Виникла помилка';

    this.modalService.openModal({
      headerMessage: errorMessage,
      buttonText,
      showSubmitBtn: true,
      icon: Icons.alertExclamationIcon,
    });
  }
}
