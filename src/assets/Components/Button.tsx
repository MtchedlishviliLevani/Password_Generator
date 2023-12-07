import styled from "styled-components";

import { myContext } from "./Card";
import { useContext } from "react";
import ArrowIcon from "../images/ArrowIcon";

function Button() {
  const context = useContext(myContext);

  return (
    <Btn onClick={() => context.setNewPassword(context.genertatedPassword)}>
      Generate
      <Arr>
        <ArrowIcon fill="#24232C" />
      </Arr>
    </Btn>
  );
}

const Arr = styled.svg`
  width: 12px;
  height: 12px;
`;

/* Define your styling for the SVG component here */
const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.basic.green};
  width: 100%;
  border: none;
  font-family: "JetBrains Mono", monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.basic.cardsBackgroundColor};
  padding: 20px 0;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.colors.button.hoverBackgroundColor};
    border: solid 1px ${({ theme }) => theme.colors.button.hoverBorderColor};
    color: ${({ theme }) => theme.colors.button.hoverColor};
  }

  &:hover ${Arr} g path {
    fill: ${({ theme }) => theme.colors.button.hoverColor};
    width: 12px;
    height: 12px;
  }
`;

export default Button;
