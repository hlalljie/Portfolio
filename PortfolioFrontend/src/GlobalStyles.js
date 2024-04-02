import { createGlobalStyle } from 'styled-components';

// Define global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #333333;
    color: #ffffff;
  }
  a:visited{
    color: inherit;
  }
`;

export default GlobalStyle;