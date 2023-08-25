import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace, sans-serif;
  }

  body {
    margin: 0;
    width: 100%;
    max-width: 100vw;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
  }

:root {
  --background1: #0388A6;
  --background2: #011526;
  --background3: #F2F2F2;
  --background4: #3F2B5C;
  --background5: #025373;
  --primary-color: yellow;
  --second-color: #011526;
  --third-color: #13F2F2;
  --fourth-color: #13F2F2;
  --text1: #F2F2F2;
  --text2: #0388A6;
  --text3: #011526;
}

`;

export default GlobalStyle;
