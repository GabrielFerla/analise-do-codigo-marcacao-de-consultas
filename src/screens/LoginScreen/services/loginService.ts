import { authService } from "../../../services/auth";
import { LoginCredentials, RegisterData } from "../../../types/auth";

export const loginService = {
  signIn: async (credentials: LoginCredentials) => {
    return await authService.signIn(credentials);
  },
  register: async (data: RegisterData) => {
    return await authService.register(data);
  },
  signOut: async () => {
    return await authService.signOut();
  },
  getStoredUser: async () => {
    return await authService.getStoredUser();
  },
};