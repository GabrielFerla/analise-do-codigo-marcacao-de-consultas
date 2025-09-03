// src/screens/RegisterScreen/styles.ts
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const BackButtonContainer = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const SuccessText = styled.Text`
  color: ${theme.colors.success};
  text-align: center;
  margin-bottom: 10px;
  font-size: 16px;
`;
