import React from "react";
import { Button } from "react-native-elements";
import { ViewStyle } from "react-native";
import Header from "../../components/Header";
import { useProfileAuth } from "./hooks/useProfileAuth";
import { useProfileNavigation } from "./hooks/useProfileNavigation";
import { Container, ScrollView, Title, styles } from "./styles";
import ProfileCard from "./components/ProfileCard";

const ProfileScreen: React.FC = () => {
  const { user, signOut } = useProfileAuth();
  const navigation = useProfileNavigation();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Meu Perfil</Title>
        <ProfileCard user={user} />
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          title="Editar Perfil"
          onPress={() => navigation.navigate("EditProfile")}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.editButton}
        />
        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;