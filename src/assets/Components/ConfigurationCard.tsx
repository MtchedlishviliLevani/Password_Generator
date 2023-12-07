import { useContext } from "react";
import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import PassConfigurator from "./PassConfigurator";
import PasswordStrength from "./PasswordStrength";
import Button from "./Button";
import { myContext } from "./Card";

function ConfigurationCard() {
  const context = useContext(myContext);
  return (
    <Wrapper>
      <CharacterLength />
      <PassConfiguratorWrapper>
        <PassConfigurator
          option={"Include Uppercase Letters"}
          onCheck={context.setIncludeUpperCase}
          check={context.includeUpperCase}
        />
        <PassConfigurator
          option={"Include Lowercase Letters"}
          onCheck={context.setIncludeLowerCase}
          check={context.includeLowerCase}
        />
        <PassConfigurator
          option={"Include Numbers"}
          onCheck={context.setIncludeInteger}
          check={context.includeInteger}
        />
        <PassConfigurator
          option={"Include Symbols"}
          onCheck={context.setIncludeSymbol}
          check={context.includeSymbols}
        />
      </PassConfiguratorWrapper>
      <PasswordStrength />
      <Button />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.basic.cardsBackgroundColor};
  margin-top: 24px;
  padding: 32px 24px 32px 32px;
`;
const PassConfiguratorWrapper = styled.div`
  margin: 42px 0 32px 0;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export default ConfigurationCard;
