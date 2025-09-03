// src/screens/RegisterScreen/index.tsx
import React, { useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { useRegisterScreen } from './hooks';
import theme from '../../styles/theme';
import {
  Container,
  Title,
  FormContainer,
  InputContainer,
  ButtonContainer,
  BackButtonContainer,
  ErrorText,
  SuccessText,
} from './styles';

const RegisterScreen: React.FC = () => {
  const {
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
  } = useRegisterScreen();

  // Limpa mensagens quando o componente é montado
  useEffect(() => {
    clearMessages();
  }, []);

  return (
    <Container>
      <Title>Cadastro de Paciente</Title>

      <FormContainer>
        {/* Campo Nome */}
        <InputContainer>
          <Input
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </InputContainer>

        {/* Campo Email */}
        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </InputContainer>

        {/* Campo Senha */}
        <InputContainer>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </InputContainer>

        {/* Mensagens de erro e sucesso */}
        {error ? <ErrorText>{error}</ErrorText> : null}
        {success ? <SuccessText>{success}</SuccessText> : null}

        {/* Botão de Cadastro */}
        <ButtonContainer>
          <Button
            title="Cadastrar"
            onPress={handleRegister}
            loading={loading}
            disabled={loading}
            buttonStyle={{
              backgroundColor: theme.colors.primary,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          />
        </ButtonContainer>

        {/* Botão de Voltar */}
        <BackButtonContainer>
          <Button
            title="Voltar para Login"
            onPress={handleBackToLogin}
            disabled={loading}
            buttonStyle={{
              backgroundColor: theme.colors.secondary,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          />
        </BackButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default RegisterScreen;
