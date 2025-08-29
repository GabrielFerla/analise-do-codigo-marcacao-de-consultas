import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from "../../../contexts/AuthContext";
import { Form, InputStyled, ButtonStyled, ErrorText } from "../style";
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  // add other routes here if needed
};

const LoginForm: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      await signIn({ email, password });
    } catch {
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form>
      <InputStyled
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputStyled
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
      <ButtonStyled
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
      />
      <ButtonStyled
        title="Cadastrar Novo Paciente"
        type="outline"
        onPress={() => navigation.navigate("Register")}
        buttonStyle={{ borderColor: "#6c63ff", borderWidth: 2 }}
        titleStyle={{ color: "#6c63ff" }}
      />
    </Form>
  );
};

export default LoginForm;