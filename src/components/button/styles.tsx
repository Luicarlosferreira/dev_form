import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: white;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  border: none;
  color: #213547;
  cursor: pointer;
  transition: all 0.1s linear;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1em;

  :disabled {
    background-color: gray;
  }
  :hover {
    background-color: #c5c5c5;
  }
`;
