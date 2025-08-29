import React from "react";
import { Container, Title } from "./style";
import LoginForm from "./components/LoginForm";
import CredentialsHint from "./components/CredentialsHint";

const LoginScreen: React.FC = () => (
  <Container>
    <Title>App Marcação de Consultas</Title>
    <LoginForm />
    <CredentialsHint />
  </Container>
);

export default LoginScreen;