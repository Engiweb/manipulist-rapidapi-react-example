import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    background: black;
    display: flex;
    flex-flow: column;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
