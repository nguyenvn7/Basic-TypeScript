export interface Input {
  type: string;
  placeholder: string;
  key: string;
}

export interface User {
  userID: string;
  account: string;
  userName: string;
  password: string;
  phoneNumber: string;
}

export interface FetchResponse<T> {
  data: T[];
  totalPages: number;
}

export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}
