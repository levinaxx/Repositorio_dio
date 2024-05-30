import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;
  cursor: pointer;

  &:hover{
    opacity: 80%;
  }
  &:active{
    opacity: 50%;
  }
`;
