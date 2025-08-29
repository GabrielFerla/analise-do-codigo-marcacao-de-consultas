import styled from "styled-components/native";
import { Input, Button, Text } from "react-native-elements";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${theme.colors.background};
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.text};
  margin-bottom: 32px;
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputStyled = styled(Input).attrs({
  containerStyle: { marginBottom: 16 },
  inputContainerStyle: { borderBottomWidth: 0 },
  inputStyle: { fontSize: 16 },
})``;

export const ButtonStyled = styled(Button).attrs({
  containerStyle: { marginBottom: 12, width: "100%" },
  buttonStyle: { paddingVertical: 12, backgroundColor: theme.colors.primary },
})``;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export const Hint = styled(Text)`
  margin-top: 12px;
  text-align: center;
  color: ${theme.colors.text};
`;

export const Credentials = styled(Text)`
  margin-top: 8px;
  text-align: center;
  color: ${theme.colors.text};
  font-size: 13px;
`;