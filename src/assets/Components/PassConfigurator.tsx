import React from "react";
import styled from "styled-components";

function PassConfigurator({
  option,
  onCheck,
  check,
}: {
  option: string;
  onCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
}) {
  return (
    <Wrapper>
      <Container>
        <Input
          type="checkbox"
          checked={check}
          onChange={() => onCheck((check) => !check)}
        />
        <CheckMark />
      </Container>
      <H3>{option}</H3>
    </Wrapper>
  );
}
const Input = styled.input`
  position: absolute;
  opacity: 0;
  /* cursor: pointer; */
  height: 0;
  width: 0;
`;
const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.basic.bodyBackgroundColor};
  border: solid 2px white;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked ~ &::after {
    display: block;
  }

  &::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  column-gap: 24px;

  /* &:hover ${Container} ${CheckMark} {
  } */

  ${Input}:checked ~ ${CheckMark} {
    background-color: #a4ffaf;
    border: initial;
  }
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.basic.primaryTextColor};
  line-height: 100%;
`;

export default PassConfigurator;
