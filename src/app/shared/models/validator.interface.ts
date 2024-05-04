export interface LengthErrorMessage {
  requiredLength: number;
}

export type PatternErrorMessage = string;

export type ErrorMessageFunction = (value: LengthErrorMessage | PatternErrorMessage) => string;

export interface ErrorMessages {
  [key: string]: ErrorMessageFunction;
}
