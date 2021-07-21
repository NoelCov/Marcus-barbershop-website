import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1.5vh 2vw;
  color: ${(props) => props.color};
  font-size: 16px;
  border: 1.5px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  width: auto;
`;
