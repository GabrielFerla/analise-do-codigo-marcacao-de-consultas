import React from "react";
import { Hint, Credentials } from "../style";
import { exampleCredentials } from "../models/exampleCredentials";

const CredentialsHint: React.FC = () => (
  <>
    <Hint>Use as credenciais de exemplo:</Hint>
    <Credentials>{exampleCredentials}</Credentials>
  </>
);

export default CredentialsHint;