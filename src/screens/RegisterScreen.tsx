// ====== IMPORTS DE DEPENDÊNCIAS E TIPOS ======
import React, { useState } from "react";
import styled from "styled-components/native";
import { Input, Button, Text } from "react-native-elements";
import { useAuth } from "../contexts/AuthContext";
import theme from "../styles/theme";
import { ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

// ====== TIPAGEM DE PROPS ======
type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Register">;
};

// ====== COMPONENTE PRINCIPAL ======
const RegisterScreen: React.FC = () => {
  // ====== HOOKS E ESTADOS ======
  const { register } = useAuth();
  const navigation = useNavigation<RegisterScreenProps["navigation"]>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ====== FUNÇÃO DE REGISTRO ======
  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      if (!name || !email || !password) {
        setError("Por favor, preencha todos os campos");
        return;
      }

      await register({
        name,
        email,
        password,
      });

      // Após o registro bem-sucedido, navega para o login
      navigation.navigate("Login");
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // ====== INTERFACE VISUAL ======
  return (
    <Container>
      <Title>Cadastro de Paciente</Title>

      {/* ====== CAMPOS DE ENTRADA ====== */}
      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        containerStyle={styles.input}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
      />

      {/* ====== BOTÕES DE AÇÃO ====== */}
      <Button
        title="Cadastrar"
        onPress={handleRegister}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Voltar para Login"
        onPress={() => navigation.navigate("Login")}
        containerStyle={styles.backButton as ViewStyle}
        buttonStyle={styles.backButtonStyle}
      />
    </Container>
  );
};

// ====== ESTILOS JAVASCRIPT ======
const styles = {
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: "100%",
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  backButton: {
    marginTop: 10,
    width: "100%",
  },
  backButtonStyle: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
};

// ====== COMPONENTES STYLED ======
const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export default RegisterScreen;
