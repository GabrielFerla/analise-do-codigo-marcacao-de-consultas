// ====== IMPORTS DE DEPENDÊNCIAS E TIPOS ======
import React from "react";
import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import theme from "../styles/theme";

// ====== TIPAGEM DAS PROPS ======
interface StatisticsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

// ====== COMPONENTE PRINCIPAL ======
const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  subtitle,
  color = theme.colors.primary,
  icon,
  style,
}) => {
  // ====== INTERFACE VISUAL ======
  return (
    <Container style={style} color={color}>
      <Header>
        {icon && <IconContainer>{icon}</IconContainer>}
        <Title>{title}</Title>
      </Header>
      <Value color={color}>{value}</Value>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

// ====== ESTILIZAÇÃO DOS COMPONENTES VISUAIS ======
const Container = styled.View<{ color: string }>`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 16px;
  margin: 8px;
  min-height: 120px;
  justify-content: space-between;
  border-left-width: 4px;
  border-left-color: ${(props: { color: string }) => props.color};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const IconContainer = styled.View`
  margin-right: 8px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-weight: 500;
  opacity: 0.8;
`;

const Value = styled.Text<{ color: string }>`
  font-size: 28px;
  font-weight: bold;
  color: ${(props: { color: string }) => props.color};
  margin-bottom: 4px;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  color: ${theme.colors.text};
  opacity: 0.6;
`;

export default StatisticsCard;
