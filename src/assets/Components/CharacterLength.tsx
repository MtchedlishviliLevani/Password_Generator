import { ChangeEvent } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { myContext } from "./Card";

export default function CharacterLength() {
  const context = useContext(myContext);

  return (
    <div>
      <Wrapper>
        <H3>Character Length </H3>
        <H4>{context.charLength}</H4>
      </Wrapper>
      <StyledInput
        type="range"
        step={1}
        min={0}
        max={20}
        value={parseInt(context.charLength)}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          context.setCharLength(e.target.value)
        }
      />
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.basic.primaryTextColor};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.basic.green};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`;

const StyledInput = styled.input.attrs<{ value: number }>(({ value }) => ({
  style: {
    backgroundSize: `${(value / 100) * 500}% 100%`,
  },
}))`
  -webkit-appearance: none;
  margin-top: 27px;
  width: 100%;
  height: 8px;
  accent-color: #e6e5ea;
  background: ${({ theme }) => theme.colors.basic.bodyBackgroundColor};
  background-image: linear-gradient(#a4ffaf, #a4ffaf);
  background-repeat: no-repeat;

  // round fig//
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    background: green;
    cursor: pointer;
    transform: translateX(5%);

    &:hover {
      background: #18171f;
      border: 0.2rem solid #a4ffaf;
    }

    &:not(:active) {
      background: #e6e5ea;
    }
  }
`;
