import styled from "styled-components";
import colors from "../constants/colors";

const Button = styled.button`
  height: 2.3rem;
  border-radius: 0.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  font-size: 17px;
  cursor: pointer;

  &.primary {
    background-color: ${colors.red};
    color: ${colors.white[100]};
  }
`;

export default Button;
