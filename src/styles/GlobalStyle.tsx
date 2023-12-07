import { createGlobalStyle } from "styled-components";

// const ml =
//   "@import url()";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
  *{  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${(props) =>
      props.theme.colors.basic.bodyBackgroundColor};
      font-family: 'JetBrains Mono', monospace; 
      font-weight: ${({ theme }) => theme.typography.fontWeight};
   display: flex;
   justify-content: center;
   align-content: center;
}
`;
export default GlobalStyle;
