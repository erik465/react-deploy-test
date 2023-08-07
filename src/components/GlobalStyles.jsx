import { createGlobalStyle } from 'styled-components';
import { normalize } from 'modern-normalize'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
  }

`;

export default GlobalStyle;