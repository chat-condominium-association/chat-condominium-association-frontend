import {
  ErrorMessages,
  LengthErrorMessage,
  PatternErrorMessage,
} from '@shared/models/validator.interface';

export const errorMessages = (name: string): ErrorMessages => {
  return {
    required: () => `Це поле є обов’язковим.`,
    minlength: message =>
      `Мінімальна довжина поля ${(message as LengthErrorMessage).requiredLength} символів.`,
    maxlength: message =>
      `Максимальна довжина поля ${(message as LengthErrorMessage).requiredLength} символів.`,
    email: () => `Поле має бути в форматі mail@mail.com`,
    mismatch: () =>
      name === 'confirmPassword' ? `Паролі не співпадають.` : `Поля не співпадають.`,
    pattern: message =>
      name === 'password'
        ? `Пароль має містити одну велику, одну маленьку букву, цифру та спеціальний символ.`
        : (message as PatternErrorMessage),
  };
};
