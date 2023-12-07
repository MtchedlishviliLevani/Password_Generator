import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Title from "./assets/Components/Title";
import Card from "./assets/Components/Card";
import styled from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Title />
        <Card />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  gap: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
