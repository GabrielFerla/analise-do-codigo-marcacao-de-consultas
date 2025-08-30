import React from "react";
import {
  ProfileCardContainer,
  Avatar,
  Name,
  Email,
  RoleBadge,
  RoleText,
  SpecialtyText,
} from "../styles";
import { getRoleText } from "../services/roleService";
import { User } from "../../../types/auth";

type ProfileCardProps = {
  user: User;
};


const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <ProfileCardContainer>
    <Avatar source={{ uri: user.image || "https://via.placeholder.com/150" }} />
    <Name>{user.name}</Name>
    <Email>{user.email}</Email>
    <RoleBadge role={user.role}>
      <RoleText>{getRoleText(user.role)}</RoleText>
    </RoleBadge>
    {user.role === "doctor" && (
      <SpecialtyText>Especialidade: {user.specialty}</SpecialtyText>
    )}
  </ProfileCardContainer>
);

export default ProfileCard;