import styled from "styled-components";
import { useContext } from "react";
import { myContext } from "./Card";
import theme from "../../styles/Theme";

function PasswordStrength() {
  const context = useContext(myContext);
  const checkInputStates = [
    context.includeLowerCase,
    context.includeInteger,
    context.includeSymbols,
    context.includeUpperCase,
  ];
  const checkedAmount = checkInputStates.filter(Boolean).length;
  let strength = "";
  let squareColors = [];
  if (checkedAmount === 4) {
    (strength = "STRONG"),
      (squareColors = Array(4).fill(
        `${theme.colors.passwordStrengthColor.strong}`
      ));
  } else if (checkedAmount === 3) {
    (strength = "MEDIUM"),
      (squareColors = [
        `${theme.colors.passwordStrengthColor.medium}`,
        `${theme.colors.passwordStrengthColor.medium}`,
        `${theme.colors.passwordStrengthColor.medium}`,
        "gray",
      ]);
  } else if (checkedAmount === 2) {
    (strength = "WEAK"),
      (squareColors = [
        `${theme.colors.passwordStrengthColor.weak}`,
        `${theme.colors.passwordStrengthColor.weak}`,
        "gray",
        "gray",
      ]);
  } else {
    strength = "TOO WEAK";
    squareColors = [
      `${theme.colors.passwordStrengthColor.tooWeak}`,
      "gray",
      "gray",
      "gray",
    ];
  }

  return (
    <Wrapper>
      <h2>STRENGTH</h2>
      <LevelWrapper>
        <span>{strength}</span>
        <SquareWrapper>
          {squareColors.map((color, index) => (
            <div key={index} style={{ background: color }}></div>
          ))}
        </SquareWrapper>
      </LevelWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.basic.bodyBackgroundColor};
  padding: 25px 32px;
  margin-bottom: 32px;

  & > h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    color: ${({ theme }) => theme.colors.basic.secondaryTextColor};
  }
`;
const SquareWrapper = styled.div`
  display: flex;

  gap: 8px;
  & > div {
    width: 10px;
    height: 28px;
  }
`;

const LevelWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  & > span {
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.basic.primaryTextColor};
  }
`;

export default PasswordStrength;
