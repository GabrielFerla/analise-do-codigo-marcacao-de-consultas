// src/screens/RegisterScreen/services/registerService.ts
import { RegisterData } from '../models/types';

export class RegisterService {
  static async register(data: RegisterData): Promise<void> {
    try {
      // Simula uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aqui você implementaria a lógica real de registro
      // Por exemplo, uma chamada para sua API de backend
      
      // Simula validação de email já existente
      if (data.email === 'teste@exemplo.com') {
        throw new Error('Este email já está em uso');
      }
      
      // Simula sucesso no registro
      console.log('Usuário registrado com sucesso:', data);
      
    } catch (error) {
      console.error('Erro no serviço de registro:', error);
      throw error;
    }
  }

  static async validateEmail(email: string): Promise<boolean> {
    try {
      // Simula validação de email único
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Aqui você implementaria a validação real
      return email !== 'teste@exemplo.com';
    } catch (error) {
      console.error('Erro na validação de email:', error);
      return false;
    }
  }
}
