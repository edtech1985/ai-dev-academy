import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace, sans-serif;
  }

  header {
    background: var(--background2);
  }
  
  body {
    margin: 0;
    width: 100%;
    max-width: 100vw;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    background: #F2F2F2;
  }

:root {
  --background1: #0388A6;
  --background2: #011526;
  --background3: #F2F2F2;
  --background4: #3F2B5C;
  --background5: #025373;
  --primary-color: #13F2F2;
  --second-color: #011526;
  --third-color: #0388A6;
  --fourth-color: #025373;
  --text1: #F2F2F2;
  --text2: #0388A6;
  --text3: #011526;
  --text4: #025373;
}

`;

export default GlobalStyle;
