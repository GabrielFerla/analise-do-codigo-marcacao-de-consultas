// src/screens/RegisterScreen/models/types.ts

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterValidation {
  isValid: boolean;
  errors: string[];
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
}
