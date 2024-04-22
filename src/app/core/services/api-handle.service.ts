import { Injectable, inject } from '@angular/core';
import { ApiMessages } from '@core/enums/api-messages.enum';
import { ApiError } from '@core/models/api.inetrface';
import { Icons } from '@shared/enums/icons.enum';
import { ModalService } from '@shared/services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class ApiHandleService {
  private modalService = inject(ModalService);

  handleError(error: ApiError, buttonText: string): void {
    const errorMessage = error?.error?.detail || ApiMessages.ErrorDefaultText;

    this.modalService.openModal({
      headerMessage: errorMessage,
      buttonText,
      showSubmitBtn: true,
      icon: Icons.alertExclamationIcon,
    });
  }

  handleSuccess(headerMessage: string): void {
    this.modalService.openModal({
      headerMessage,
      icon: Icons.succesIcon,
      showCloseBtn: true,
    });
  }
}
