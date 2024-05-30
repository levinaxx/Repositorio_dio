import React from "react";
import { InputContainer } from "./styles";

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} placeholder="Digite o link do repositório" />
    </InputContainer>
  );
}

export default Input;
