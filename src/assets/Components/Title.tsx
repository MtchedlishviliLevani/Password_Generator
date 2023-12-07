import styled from "styled-components";

export default function Title() {
  return <Heading>Password Generator</Heading>;
}

const Heading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${(props) => props.theme.colors.basic.primaryTextColor};
`;
