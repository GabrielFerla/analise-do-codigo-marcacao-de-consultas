// src/screens/RegisterScreen/hooks/useRegisterScreen.ts
import { useState } from 'react';
import { RegisterService } from '../services/registerService';
import { RegisterData } from '../models/types';

export const useRegisterScreen = () => {
  // Estados
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Função para validar os campos
  const validateFields = (): boolean => {
    if (!name.trim()) {
      setError('Nome é obrigatório');
      return false;
    }

    if (!email.trim()) {
      setError('Email é obrigatório');
      return false;
    }

    if (!email.includes('@')) {
      setError('Email inválido');
      return false;
    }

    if (!password || password.length < 6) {
      setError('Senha deve ter pelo menos 6 caracteres');
      return false;
    }

    return true;
  };

  // Função para limpar mensagens
  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  // Função para lidar com o registro
  const handleRegister = async () => {
    try {
      clearMessages();
      
      if (!validateFields()) {
        return;
      }

      setLoading(true);

      const registerData: RegisterData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      await RegisterService.register(registerData);
      
      setSuccess('Cadastro realizado com sucesso!');
      
      // Limpa os campos após sucesso
      setName('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erro inesperado ao realizar cadastro');
      }
    } finally {
      setLoading(false);
    }
  };

  // Função para voltar para a tela de login
  const handleBackToLogin = () => {
    // Aqui você implementaria a navegação de volta
    // Por enquanto, apenas limpa as mensagens
    clearMessages();
  };

  return {
    // Estados
    name,
    email,
    password,
    loading,
    error,
    success,
    
    // Setters
    setName,
    setEmail,
    setPassword,
    
    // Funções
    handleRegister,
    handleBackToLogin,
    clearMessages,
  };
};
