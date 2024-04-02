import { Icons } from '@shared/enums/icons.enum';

export interface ModalData {
  showCloseBtn: boolean;
  showSubmitBtn: boolean;
  headerMessage: string;
  buttonText: string;
  handleSubmit: () => void;
  icon: Icons;
}
